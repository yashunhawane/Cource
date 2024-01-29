import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const [cources, setCources] = useState([]);
  const navigate = useNavigate();

  //
  const gotoCourse = (course) => {
    navigate(`/detail`, {
      state: {
        image: course.courceImageUrl,
        title: course.courceTitle,
        description: course.courceDescription,
        price: course.courcePrice,
      },
    });
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/");
      const data = await response.json();
      setCources(data.cources);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {cources.map((cource) => {
        return (
          <>
            <Card
              key={cource._id}
              sx={{
                maxWidth: 550,
                maxHeight: 500,
                marginTop: 5,
                mx: "auto",
                cursor: "pointer",
              }}
              onClick={() => {
                fetch(`http://localhost:3000/detail/${cource._id}`)
                  .then((res) => res.json())
                  .then((items) => {
                    console.log("Received data:", items.detailCources);
                    gotoCourse(items.detailCources);
                  })
                  .catch((error) =>
                    console.error("Error fetching course details:", error)
                  );
              }}
            >
              <CardMedia sx={{ height: 220 }} image={cource.courceImageUrl} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {cource.courceTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {cource.courceDescription}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>
                  ₹{cource.courcePrice.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Course;

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  //
  const gotoCourse = (coures) => {
    navigate(`/detail`, {
      state: {
        image: coures.image,
        title: coures.title,
        description: coures.description,
        price: coures.price,
      },
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching course data:", error));
  }, []);
  return (
    <>
      {data.map((data) => {
        return (
          <>
            <Card
              key={data.id}
              sx={{
                maxWidth: 550,
                maxHeight: 500,
                marginTop: 5,
                mx: "auto",
                cursor: "pointer",
              }}
              onClick={() => {
                fetch(`http://localhost:3000/detail/${data.id}`)
                  .then((res) => res.json())
                  .then((items) => {
                    console.log("Received data:", items);
                    gotoCourse(items);
                  })
                  .catch((error) =>
                    console.error("Error fetching course details:", error)
                  );
              }}
            >
              <CardMedia sx={{ height: 220 }} image={data.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>
                  ₹{data.price.toFixed(2)}
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

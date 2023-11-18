import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { NavBar } from "../../component/NavBar";
import CreateIcon from "@mui/icons-material/Create";

const data = [
  {
    id: 1,
    price: 399,
    title: "Title2",
    desctiption:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro itaque recusandae incidunt. Error mollitia voluptatibus molestiae",
    image:
      "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    price: 399,
    title: "Title1",
    desctiption:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro itaque recusandae incidunt. Error mollitia voluptatibus molestiae",
    image:
      "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    price: 399,
    title: "Title3",
    desctiption:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro itaque recusandae incidunt. Error mollitia voluptatibus molestiae",
    image:
      "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
  },
  {
    id: 1,
    price: 399,
    title: "Title2",
    desctiption:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro itaque recusandae incidunt. Error mollitia voluptatibus molestiae",
    image:
      "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
  },
];

const UserProfile = () => {
  return (
    <>
      <NavBar />
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {data.map((data, index) => (
            <Card
              key={index}
              sx={{ maxWidth: 300, flexBasis: "50%", marginTop: 5 }}
            >
              <CardMedia sx={{ height: 150 }} image={data.image} />
              <CardContent sx={{ height: 20 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </>
      <Box sx={{ display: "flex", justifyContent: "center", margin: 5 }}>
        <Button
          sx={{
            backgroundColor: "#2B2B2B",
            color: "#D4D4D4",
          }}
        >
          Create your own Course 
          <CreateIcon />
        </Button>
      </Box>
    </>
  );
};

export default UserProfile;
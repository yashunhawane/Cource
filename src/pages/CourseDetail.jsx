import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { NavBar } from "../component/NavBar";
import { useLocation } from "react-router-dom";

const CourseDetail = () => {
  const { state } = useLocation();
  console.log(state);
  const { image, title, description, price } = state;

  const handleAddToCart = () => {
    console.log("Added to Cart");
  };

  return (
    <>
      <NavBar />
      <Card sx={{ maxWidth: 750, maxHeight: 550, marginTop: 5, mx: "auto" }}>
        <CardMedia sx={{ height: 320 }} image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>
            ₹{price ? state.price.toFixed(2) : "N/A"}
          </Typography>
          <Button
            onClick={handleAddToCart}
            variant="contained"
            sx={{ backgroundColor: "#2B2B2B", marginTop: 2, color: "#D4D4D4" }}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default CourseDetail;

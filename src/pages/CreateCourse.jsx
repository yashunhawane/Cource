import { Container, TextField, Button } from "@mui/material";
import { NavBar } from "../component/NavBar";
import { useState } from "react";

const CreateCourse = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch("http://localhost:3000/createCource", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title || "",
          url: imageUrl || "",
          description: description || "",
          price: price || "",
        }),
      });
    } catch (error) {
      console.error("Error during fetch:", error.message);
    }
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Image URL"
            variant="outlined"
            margin="normal"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <TextField
            fullWidth
            label="Course Title"
            variant="outlined"
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            fullWidth
            label="Course Description"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            fullWidth
            label="Price"
            variant="outlined"
            margin="normal"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Button
            type="submit"
            sx={{
              backgroundColor: "#2B2B2B",
              color: "#D4D4D4",
            }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};

export default CreateCourse;

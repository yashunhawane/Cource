import { Input, InputLabel } from "@mui/material";
import { Paper, Typography, Button } from "@mui/material";
import { useState } from "react";

const USerSignup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    conformPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !userData.username ||
      !userData.email ||
      !userData.password ||
      !userData.conformPassword
    ) {
      alert("Please fill in all Data");
      return;
    }
    if (userData.password !== userData.conformPassword) {
      alert("Password does not match");
      return;
    }
    try {
      await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userData.username,
          email: userData.email,
          password: userData.password,
        }),
      });
    } catch (error) {
      console.log("error during sending data", error);
    }
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        maxWidth: "300px",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <Typography variant="h5" component="div" align="center" gutterBottom>
        SignUp
      </Typography>
      <form onSubmit={handleSubmit}>
        <InputLabel>Username</InputLabel>
        <Input
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <InputLabel>Email</InputLabel>
        <Input
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <InputLabel>Password</InputLabel>
        <Input
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <InputLabel>Confirm Password</InputLabel>
        <Input
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          name="conformPassword"
          value={userData.conformPassword}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{
            marginTop: "20px",
            backgroundColor: "#2B2B2B",
            color: "#D4D4D4",
          }}
        >
          Signup
        </Button>
      </form>
    </Paper>
  );
};

export default USerSignup;

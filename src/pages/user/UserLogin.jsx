/* eslint-disable react/no-unescaped-entities */
import { Paper, Input, Typography, Button, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../component/NavBar";
import { useDispatch } from "react-redux";
import { changeLogin, setUser, setToken } from "../../redux/slice/loginSlice";
import { useState } from "react";
const UserLogin = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gotoSignup = () => {
    navigate("/signup");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userData.username,
          password: userData.password,
        }),
      });
      //if status code 200-299
      if (response.ok) {
        const responseData = await response.json();
        const { token, user } = responseData;
        console.log(user, token);
        dispatch(setToken(token));
        dispatch(setUser(user));
        dispatch(changeLogin(true));
        navigate("/");
      } else {
        alert("Username or password does not match");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <>
      <NavBar />
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
          Login
        </Typography>
        <form onSubmit={handelLogin}>
          <InputLabel>Username</InputLabel>
          <Input
            type="text"
            label="Username"
            variant="outlined"
            fullWidth
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
          <InputLabel>Password</InputLabel>
          <Input
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{
              marginTop: "20px",
              backgroundColor: "#2B2B2B",
              color: "#D4D4D4",
            }}
            onClick={handelLogin}
          >
            Login
          </Button>
        </form>
        <Typography>
          Don't have an account yet?{" "}
          <Button
            style={{ color: "black", fontWeight: "bold" }}
            onClick={gotoSignup}
          >
            Signup
          </Button>
        </Typography>
      </Paper>
    </>
  );
};

export default UserLogin;

/* eslint-disable react/no-unescaped-entities */
import { Paper, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../component/NavBar";
import { useDispatch } from "react-redux";
import { changeLogin } from "../../redux/slice/loginSlice";
const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Add parentheses to invoke the function
  const gotoSignup = () => {
    navigate("/signup");
  };

  const handelLogin = () => {
    navigate("/");
    dispatch(changeLogin(true))
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
        <form>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
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

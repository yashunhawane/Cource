import { Paper, TextField, Typography, Button } from "@mui/material";

const USerSignup = () => {
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
      <form>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
        />
           <TextField
          label="Email"
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
           <TextField
          label="Conform Password"
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
        >
          Signup
        </Button>
      </form>
    </Paper>
  );
};

export default USerSignup;

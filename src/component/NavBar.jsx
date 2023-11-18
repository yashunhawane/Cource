import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const NavBar = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  const gotoLogin = () => {
    const path = isUserLogin ? "/profile" : "/login";
    navigate(path);
  };

  //
  const gotoCart = () => {
    navigate("/cart");
  };
  //
  const isUserLogin = useSelector((state) => state.login);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#2B2B2B" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#D4D4D4", cursor: "pointer" }}
              onClick={gotoHome}
            >
              Course✨
            </Typography>
            <Button
              sx={{
                backgroundColor: "#2B2B2B",
                color: "#D4D4D4",
              }}
              onClick={gotoLogin}
            >
              {isUserLogin ? <AccountCircleIcon /> : "login"}
            </Button>
            {isUserLogin && <ShoppingCartIcon onClick={gotoCart} />}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

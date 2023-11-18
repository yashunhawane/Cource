import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavBar } from "../component/NavBar";

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
];

const Cart = () => {
  const total = data.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;
  }, 0);
  return (
    <>
      <NavBar />

      <>
        {data.map((data, index) => {
          return (
            <>
              <Card
                key={index}
                sx={{ maxWidth: 550, maxHeight: 500, marginTop: 5, mx: "auto" }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    <CardMedia sx={{ height: 150 }} image={data.image} />
                  </Grid>
                  <Grid item xs={8}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{ marginTop: 1 }}
                      >
                        ₹{data.price.toFixed(2)}
                      </Typography>
                      <Button
                        sx={{
                          color: "#2B2B2B",
                        }}
                      >
                        Remove
                        <DeleteIcon />
                      </Button>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </>
          );
        })}
      </>
      <div
        style={{
          textAlign: "center",
          margin: 30,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          style={{
            marginTop: 1,
            fontWeight: "bold",
            marginRight: 120,
          }}
        >
          Total: ₹{total.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#2B2B2B",
            color: "#D4D4D4",
            marginLeft: 120,
          }}
        >
          Checkout
        </Button>
      </div>
    </>
  );
};

export default Cart;

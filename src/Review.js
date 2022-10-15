import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { CartContext, DataContext } from "./App";

const products = [
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
  {
    name: "Product 2",
    desc: "Another thing",
    price: "$3.45",
  },
  {
    name: "Product 3",
    desc: "Something else",
    price: "$6.51",
  },
  {
    name: "Product 4",
    desc: "Best thing of all",
    price: "$14.11",
  },
  { name: "Shipping", desc: "", price: "Free" },
];

export default function Review() {
  const [
    cart,
    setCart,
    total,
    setTotal,
    state,
    setState,
    data,
    setData,
    searchText,
    setsearchText,
  ] = React.useContext(CartContext);  var sum = 0;
  const summ = cart.reduce((a, i) => {
    return a + Number(i[1].price) * Number(i[2]);
  }, 0);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product) => {
      
          return (
            <ListItem key={product[1].name} sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={product[1].name}
                secondary={"Quantity * " + product[2]}
              />
              <Typography variant="body2">{"₹"+product[1].price * product[2]}</Typography>
            </ListItem>
          );
        })}
        <ListItem key={5} sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={"Discount Coupon"}
                secondary={"New40"}
              />
              <Typography variant="body2">-{.4*summ}</Typography>
            </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          ₹{summ-.4*summ}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}

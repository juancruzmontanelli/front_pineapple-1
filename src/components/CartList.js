import React from "react";
import { Grid } from "@mui/material";
import CartListItem from "./CartListItem";
import { useSelector } from "react-redux";

const CartList = () => {
  const products = useSelector((state) => state.cart);
  return (
    <Grid xs={8} item>
      {products.map((product) => (
        <CartListItem data={product} key={product.id} />
      ))}
    </Grid>
  );
};

export default CartList;

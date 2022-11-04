import React from "react";
import { Grid } from "@mui/material";

import CartHeader from "../components/CartHeader";
import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";
import { useSelector } from "react-redux";
import CartEmpty from "../components/CartEmpty";

const Cart = () => {
  const totalItemsCart = useSelector((state) => state.cart.length);

  if (totalItemsCart === 0) return <CartEmpty />;

  return (
    <>
      <CartHeader />
      <Grid spacing={2} container>
        <CartList />
        <CartSummary />
      </Grid>
    </>
  );
};

export default Cart;

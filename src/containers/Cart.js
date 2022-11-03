import React from "react";
import { Grid } from "@mui/material";

import CartHeader from "../components/CartHeader";
import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";

const Cart = () => {
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

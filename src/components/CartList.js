import React from "react";
import { Grid } from "@mui/material";
import CartListItem from "./CartListItem";

const CartList = () => {
  const products = [
    {
      id: 1,
      title: "iPhone SE 128GB",
      photo:
        "https://tienda.personal.com.ar/images/PAPSB_128_I_01_2d1ece16dd.png",
      quantity: 1,
      price: "178500",
    },
    {
      id: 2,
      title: "TCL 20 E",
      photo:
        "https://tienda.personal.com.ar/images/TCL_20_E_Negro_min_c2215a8318.png",
      quantity: 1,
      price: "23624",
    },
    {
      id: 2,
      title: "Motorola Moto G41",
      photo:
        "https://tienda.personal.com.ar/images/Moto_G41_Frente_min_2a8bf27db1.png",
      quantity: 1,
      price: "55799",
    },
  ];
  return (
    <Grid xs={8} item>
      {products.map((product) => (
        <CartListItem data={product} />
      ))}
    </Grid>
  );
};

export default CartList;

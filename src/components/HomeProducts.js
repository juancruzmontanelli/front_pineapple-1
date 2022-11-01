import { Grid } from "@mui/material";
import React from "react";
import ProductItem from "../commons/ProductItem";

const HomeProducts = () => {
  const arr = new Array(20).fill(1);
  return (
    <Grid item xs={9}>
      <Grid container spacing={2}>
        {arr.map((value, index) => (
          <ProductItem key={index} />
        ))}
      </Grid>
    </Grid>
  );
};

export default HomeProducts;

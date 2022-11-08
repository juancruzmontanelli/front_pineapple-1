import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../commons/ProductItem";

const SearchProduct = () => {

  const searchProducts = useSelector((state) => state.products.search);
  
  return (
    <Grid item xs={9}>
      <Grid container spacing={2}>
        {searchProducts.map((product, index) => (
          <ProductItem data={product} key={index} />
        ))}
      </Grid>
    </Grid>)  
};

export default SearchProduct;

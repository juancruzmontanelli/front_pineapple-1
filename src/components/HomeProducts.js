import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../commons/ProductItem";
import axios from 'axios'
import { setProducts } from "../state/products";

const HomeProducts = () => {
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <Grid item xs={9}>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <ProductItem data={product} key={index} />
        ))}
      </Grid>
    </Grid>)  
};

export default HomeProducts;

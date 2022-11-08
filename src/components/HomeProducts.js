import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../commons/ProductItem";
import axios from "axios";
import { setProducts } from "../state/products";
import { useParams } from "react-router";


const HomeProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const searchProducts = useSelector((state) => state.products.search);
  const filterBrandProducts = useSelector(
    (state) => state.products.filterBrand
  );
  const filterPriceProducts = useSelector(
    (state) => state.products.filterPrice
  );
  const { type } = useParams();

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (type === "brand") {
    return (
      <Grid item xs={9}>
        <Grid container spacing={2}>
          {filterBrandProducts.map((product, index) => (
            <ProductItem data={product} key={index} />
          ))}
        </Grid>
      </Grid>
    );
  } else if (type === "products") {
    return (
      <Grid item xs={9}>
        <Grid container spacing={2}>
          {searchProducts.map((product, index) => (
            <ProductItem data={product} key={index} />
          ))}
        </Grid>
      </Grid>
    );
  } else if (type === 'price') {
    return (
      <Grid item xs={9}>
        <Grid container spacing={2}>
          {filterPriceProducts.map((product, index) => (
            <ProductItem data={product} key={index} />
          ))}
        </Grid>
      </Grid>
    );
  } else { return (
    <Grid item xs={9}>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <ProductItem data={product} key={index} />
          ))}
        </Grid>
      </Grid>)
  }
};

export default HomeProducts;

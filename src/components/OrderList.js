import React from 'react'
import { useSelector } from "react-redux";
import OrderListItem from './OrderListItem';
import { Grid } from "@mui/material";

const OrderList = () => {
    const products = useSelector((state) => state.products);
  return (
    <Grid xs={12} item>
      {products.map((product) => (
        <OrderListItem data={product} key={product.id} />
      ))}
    </Grid>
  );
}

export default OrderList


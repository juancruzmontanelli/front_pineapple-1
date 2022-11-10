import React, { useEffect, useState } from "react";

import OrderListItem from "./OrderListItem";
import { Grid } from "@mui/material";
import axios from "axios";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/cart/history`)
      .then((res) => {
       setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid xs={12} item>
      {orders.map((order) => (
        <OrderListItem data={order} key={order.id} />
      ))}
    </Grid>
  );
};

export default OrderList;

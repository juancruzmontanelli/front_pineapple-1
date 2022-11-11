import {
  Card,
  Typography,
  CardContent,
  CardMedia,
} from "@mui/material";
import carrito from '../assets/ecommerce.png'
import React from "react";
import AdminMenuProducts from "./AdminMenuProducts";

const OrderListItem = ({ data }) => {
 
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        width:'50%',
        p: "16px",
        mb: "20px",
        backgroundColor: "#fafafa",
      }}
    >
      <CardMedia
        sx={{ maxWidth: "100px" }}
        component="img"
        image={carrito}
        alt='carrito'
      />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AdminMenuProducts products={data.orderItems}/>
      </CardContent>
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="subtitle1" color="initial">Estado: {data.status}</Typography>
      </CardContent>
    </Card>
  );
};

export default OrderListItem;

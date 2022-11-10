import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";

const OrderListItem = ({ data }) => {
 
  const navigate = useNavigate()

  const handleOrder = (e) => {
    e.preventDefault();
    navigate(`/product/${data.orderItems[0].product.url}`)
  };

  console.log(data);
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        p: "16px",
        mb: "20px",
        backgroundColor: "#fafafa",
      }}
    >
      <CardMedia
        sx={{ maxWidth: "100px" }}
        component="img"
        image={data.orderItems[0].product.img}
        alt={data.orderItems[0].product.name}
      />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" component="p" sx={{ pl: "5px" }}>
          {data.orderItems[0].product.name}
        </Typography>
        <Typography variant="caption" sx={{ pl: "5px" }}>
          Almacenamiento: {data.orderItems[0].product.internalStorage} GB,
          sistema operativo: {data.orderItems[0].product.operatingSystem},
          memoria: {data.orderItems[0].product.ram} MB
        </Typography>
        <Typography variant="caption" sx={{ pl: "5px" }}>
          Unidades: {data.orderItems[0].quantity}
        </Typography>
      </CardContent>
      <Box
        sx={{
          width: "200px",
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          onClick={handleOrder}
          sx={{
            bgcolor: "#ed7203",
            color: "black",
            width: "90%",
            margin: "2%",
            "&:hover": {
              backgroundColor: "#cf6a0e",
              color: "black",
            },
          }}
          size="small"
          variant="contained"
        >
          Ver producto
        </Button>
      </Box>
    </Card>
  );
};

export default OrderListItem;

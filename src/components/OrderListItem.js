import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const OrderListItem = ({ data }) => {
  const { name, img, internalStorage, operatingSystem, ram } = data;
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
        image={img}
        alt={name}
      />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" component="p" sx={{ pl: "5px" }}>
          {name}
        </Typography>
        <Typography variant="caption" sx={{ pl: "5px" }}>
          Almacenamiento: {internalStorage} GB, sistema operativo: {operatingSystem}, memoria: {ram} MB
        </Typography>
        <Typography variant="caption" sx={{ pl: "5px" }}>
          1 unidad
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
          Ver compra
        </Button>
        <Button
          sx={{
            bgcolor: "#f0af75",
            color: "black",
            width: "90%",
            margin: "2%",
            "&:hover": {
              backgroundColor: "#f09d54",
              color: "black",
            },
          }}
          size="small"
          variant="contained"
        >
          Volver a comprar
        </Button>
      </Box>
    </Card>
  );
};

export default OrderListItem;

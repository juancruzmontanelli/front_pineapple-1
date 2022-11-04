import { Box, Typography } from "@mui/material";
import React from "react";

const CartEmpty = () => {
  return (
    <Box sx={{ my: "60px" }}>
      <Typography variant="h4">Carrito</Typography>
      <Typography variant="subtitle1" sx={{ mb: "20px" }}>
        Aún no tienes productos en tu carrito
      </Typography>
    </Box>
  );
};

export default CartEmpty;

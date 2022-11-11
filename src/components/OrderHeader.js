import { Typography, Box } from "@mui/material";
import React from "react";


const OrderHeader = () => {
  
  return (
    <Box>
      <Typography sx={{ mt: "5%", mb: "5%" }} variant="h4">
        Mis órdenes de compra
      </Typography>
    </Box>
  );
};

export default OrderHeader;

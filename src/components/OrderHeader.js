import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';


const OrderHeader = () => {
  const products = useSelector((state) => state.products);
  return (
    <Box>
      <Typography sx={{ mt: "5%", mb: "5%" }} variant="h4">
        Mis compras
      </Typography>
      <Button size='small' startIcon={<DeleteIcon />}>
        Borrar historial completo
      </Button>
      <Typography sx={{ mt: "5%", mb: "10%" }} variant="caption">
        {products.length} compras
      </Typography>
    </Box>
  );
};

export default OrderHeader;

import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const CartHeader = () => {
  const cart = useSelector((state) => state.cart);
  const totalItemsCart = cart.reduce((acc, { quantity }) => acc + quantity, 0);
  return (
    <>
      <Stepper activeStep={0} sx={{ marginY: "40px" }}>
        {["Carrito", "Detalles de pago", "Compra realizada"].map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Typography variant="h4">Carrito</Typography>
      <Typography variant="subtitle1" sx={{ mb: "20px" }}>
        {totalItemsCart === 0 && "Aún no tienes productos en tu carrito"}
        {totalItemsCart === 1 && "Tienes 1 producto agregado a tu carrito"}
        {totalItemsCart > 1 &&
          `Tienes ${totalItemsCart} productos agregados a tu carrito`}
      </Typography>
    </>
  );
};

export default CartHeader;

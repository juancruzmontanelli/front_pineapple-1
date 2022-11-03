import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";

const CartHeader = () => {
  return (
    <>
      <Stepper activeStep={0} sx={{ marginY: "40px" }}>
        {["Carrito", "Detalles de envio", "Pago"].map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Typography variant="h4">Carrito</Typography>
      <Typography variant="subtitle1" sx={{ mb: "20px" }}>
        Tienes 1 producto agregado a tu carrito
      </Typography>
    </>
  );
};

export default CartHeader;

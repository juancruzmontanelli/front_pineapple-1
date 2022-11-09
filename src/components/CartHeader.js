import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const CartHeader = ({ activeStep, stepLabel }) => {
  const cart = useSelector((state) => state.cart);
  const totalItemsCart = cart.items.reduce(
    (acc, { quantity }) => acc + quantity,
    0
  );
  return (
    <>
      <Stepper activeStep={activeStep} sx={{ marginY: "40px" }}>
        {stepLabel.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Typography variant="h4" sx={{ mb: "20px" }}>
        {stepLabel[activeStep]}
      </Typography>

      {activeStep === 0 && (
        <Typography variant="subtitle1" sx={{ mt: "-10px", mb: "20px" }}>
          {totalItemsCart === 0 && "Aún no tienes productos en tu carrito"}
          {totalItemsCart === 1 && "Tienes 1 producto agregado a tu carrito"}
          {totalItemsCart > 1 &&
            `Tienes ${totalItemsCart} productos agregados a tu carrito`}
        </Typography>
      )}
    </>
  );
};

export default CartHeader;

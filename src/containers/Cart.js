import React, { useState } from "react";
import { Grid } from "@mui/material";

import CartHeader from "../components/CartHeader";
import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";
import { useSelector } from "react-redux";
import CartEmpty from "../components/CartEmpty";
import CartPaymentDetails from "../components/CartPaymentDetails";
import CartSuccess from "../components/CartSuccess";

const Cart = () => {
  const totalItemsCart = useSelector((state) => state.cart.items.length);
  const [activeStep, setActiveStep] = useState(0);
  const stepLabel = ["Carrito", "Detalles de pago", "Compra realizada"];
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardExpiration: "",
    cardCode: "",
    cardName: "",
  });
  const [inputErrors, setInputErrors] = useState({
    cardNumber: false,
    cardExpiration: false,
    cardCode: false,
    cardName: false,
  });
  if (totalItemsCart === 0 && activeStep !== 2) return <CartEmpty />;

  return (
    <>
      <CartHeader activeStep={activeStep} stepLabel={stepLabel} />
      {activeStep === 2 ? (
        <CartSuccess />
      ) : (
        <Grid spacing={2} container>
          {activeStep === 0 && <CartList />}
          {activeStep === 1 && (
            <CartPaymentDetails
              paymentDetails={paymentDetails}
              setPaymentDetails={setPaymentDetails}
              setInputErrors={setInputErrors}
              inputErrors={inputErrors}
            />
          )}
          {activeStep === 2 && <p>Confirmación de compra</p>}
          <CartSummary
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            paymentDetails={paymentDetails}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Grid>
      )}
    </>
  );
};

export default Cart;

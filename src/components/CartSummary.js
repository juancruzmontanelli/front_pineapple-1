import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { buyCart } from "../state/cart";
import { totalPriceFormatter } from "../utils/formatter";
import { isNumeric } from "../utils/validation";

const CartSummary = ({
  activeStep,
  setActiveStep,
  paymentDetails,
  inputErrors,
  setInputErrors,
}) => {
  const user = useSelector((state) => state.user);
  const { items: cart, isLoading } = useSelector((state) => state.cart);
  const [buttonText, setButtonText] = useState("Continuar compra");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const subtotal = totalPriceFormatter(
    cart.reduce((acc, { quantity, price }) => acc + quantity * price, 0)
  );
  const total = subtotal;

  const handleClick = () => {
    if (!user.id) return navigate("/login");
    if (activeStep === 0) {
      setActiveStep(activeStep + 1);
      setButtonText("Finalizar compra");
    } else if (activeStep === 1) {
      const cardNumber = paymentDetails.cardNumber.replaceAll(" ", "");
      if (
        !isNumeric(cardNumber) ||
        cardNumber.length < 13 ||
        cardNumber.length > 16
      )
        return setInputErrors({ ...inputErrors, cardNumber: true });

      if (
        !/(0*[01-12]\d)([/])(0*[23-99]\d)/g.test(paymentDetails.cardExpiration)
      )
        return setInputErrors({ ...inputErrors, cardExpiration: true });

      if (
        !isNumeric(paymentDetails.cardCode) ||
        paymentDetails.cardCode.length !== 3
      )
        return setInputErrors({ ...inputErrors, cardCode: true });
      if (paymentDetails.cardName.trim() === "")
        return setInputErrors({ ...inputErrors, cardName: true });

      if (paymentDetails.cardNumber)
        dispatch(buyCart(paymentDetails)).then(() => {
          setActiveStep(2);
        });
    }
  };

  return (
    <Grid xs={4} sx={{ mb: "80px" }} item>
      <Card sx={{ p: "10px", backgroundColor: "#fafafa" }}>
        <CardContent>
          <Typography variant="h5" component="span">
            Resumen de la compra
          </Typography>
          <Divider sx={{ my: "10px" }} />
          <List disablePadding={true}>
            <ListItem
              disablePadding={true}
              disableGutters={true}
              secondaryAction={<Typography>${subtotal}</Typography>}
            >
              <ListItemText>Subtotal </ListItemText>
            </ListItem>

            <ListItem
              disablePadding={true}
              disableGutters={true}
              secondaryAction={<Typography>GRATIS</Typography>}
            >
              <ListItemText>Costo de envío </ListItemText>
            </ListItem>

            <Divider sx={{ mt: "10px" }} />
            <ListItem
              disableGutters={true}
              secondaryAction={
                <Typography variant="h6" component="span">
                  ${total}
                </Typography>
              }
            >
              <ListItemText>
                <Typography variant="h6" component="span">
                  Total
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="large"
            variant="contained"
            onClick={handleClick}
            disabled={isLoading}
            sx={{
              bgcolor: "#ed7203",
              color: "black",
              "&:hover": {
                backgroundColor: "#cf6a0e",
                color: "black",
              },
            }}
          >
            {buttonText}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CartSummary;

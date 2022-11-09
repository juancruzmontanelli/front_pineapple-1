import {
  Card,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { CreditCard, CalendarMonth, Pin, Person } from "@mui/icons-material/";
import React from "react";
import { Box } from "@mui/system";

const CartPaymentDetails = ({
  paymentDetails,
  setPaymentDetails,
  setInputErrors,
  inputErrors,
}) => {
  const handleNumber = (e) => {
    const value = e.target.value
      .replace(/[^0-9]/gi, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();

    setPaymentDetails({ ...paymentDetails, cardNumber: value });
    setInputErrors({ ...inputErrors, cardNumber: false });
  };

  const handleExpiration = (event) => {
    const code = event.keyCode;
    const allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }

    const value = event.target.value
      .replace(
        /^([1-9]\/|[2-9])$/g,
        "0$1/" // 3 > 03/
      )
      .replace(
        /^(0[1-9]|1[0-2])$/g,
        "$1/" // 11 > 11/
      )
      .replace(
        /^([0-1])([3-9])$/g,
        "0$1/$2" // 13 > 01/3
      )
      .replace(
        /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
        "$1/$2" // 141 > 01/41
      )
      .replace(
        /^([0]+)\/|[0]+$/g,
        "0" // 0/ > 0 and 00 > 0
      )
      .replace(
        /[^\d/]|^[/]*$/g,
        "" // To allow only digits and `/`
      )
      .replace(
        /\/\//g,
        "/" // Prevent entering more than 1 `/`
      );
    setPaymentDetails({ ...paymentDetails, cardExpiration: value });
    setInputErrors({ ...inputErrors, cardExpiration: false });
  };

  const handleCode = (e) => {
    setPaymentDetails({ ...paymentDetails, cardCode: e.target.value });
    setInputErrors({ ...inputErrors, cardCode: false });
  };

  const handleName = (e) => {
    setPaymentDetails({ ...paymentDetails, cardName: e.target.value });
    setInputErrors({ ...inputErrors, cardName: false });
  };
  return (
    <Grid xs={8} item>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "26px",
          p: "38px 16px",
          mb: "20px",
          backgroundColor: "#fafafa",
        }}
      >
        <Box sx={{ width: "400px" }}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel htmlFor="input-credit-card">
              Número de tarjeta de credito
            </InputLabel>
            <Input
              error={inputErrors.cardNumber}
              id="input-credit-card"
              placeholder="XXXX XXXX XXXX XXXX"
              value={paymentDetails.cardNumber}
              onChange={handleNumber}
              autoComplete="off"
              required
              inputProps={{
                maxLength: 19,
                inputMode: "numeric",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <CreditCard />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", gap: "10px", width: "400px" }}>
          <FormControl>
            <InputLabel htmlFor="input-expiration-date">
              Fecha de expiración
            </InputLabel>
            <Input
              error={inputErrors.cardExpiration}
              id="input-expiration-date"
              placeholder="MM / AA"
              value={paymentDetails.cardExpiration}
              onChange={handleExpiration}
              inputProps={{
                maxLength: 5,
                inputMode: "numeric",
                pattern: "^d{2}/d{2}$",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <CalendarMonth />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="input-security-code">
              Código de seguridad
            </InputLabel>
            <Input
              error={inputErrors.cardCode}
              id="input-security-code"
              placeholder="XXX"
              value={paymentDetails.cardCode}
              onChange={handleCode}
              inputProps={{
                maxLength: 3,
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Pin />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box sx={{ width: "400px" }}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel htmlFor="input-card-name">Nombre y apellido</InputLabel>
            <Input
              error={inputErrors.cardName}
              id="input-card-name"
              aria-describedby="input-card-name-text"
              value={paymentDetails.cardName}
              onChange={handleName}
              startAdornment={
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              }
            />
            <FormHelperText id="input-card-name-text">
              Tal como aparece en la tarjeta
            </FormHelperText>
          </FormControl>
        </Box>
      </Card>
    </Grid>
  );
};

export default CartPaymentDetails;

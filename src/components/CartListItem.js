import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { priceFormatter } from "../utils/formatter";
import { isNumeric } from "../utils/validation";
import CartQuantitySelector from "./CartQuantitySelector";

const CartListItem = ({ data }) => {
  const { id, title, photo, quantity, price } = data;
  const [total, setTotal] = useState(price);
  const [totalQuantity, setTotalQuantity] = useState(quantity);

  const handleQuantity = (type, total) => {
    if (type === "decrement" && totalQuantity === 1) return false;
    if (type === "set" && (!isNumeric(total) || Number(total) === 0))
      return false;

    let newQuantity;
    if (type === "set") {
      newQuantity = Number(total);
    } else if (type === "increment") {
      newQuantity = totalQuantity + 1;
    } else if (type === "decrement") {
      newQuantity = totalQuantity - 1;
    }

    setTotalQuantity(newQuantity);
    setTotal(price * newQuantity);
  };
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
        image={photo}
        alt={title}
      />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" component="p" sx={{ pl: "5px" }}>
          {title}
        </Typography>
        <Button
          size="small"
          variant="text"
          color="error"
          sx={{ alignSelf: "flex-start" }}
        >
          Eliminar
        </Button>
      </CardContent>

      <CartQuantitySelector
        value={totalQuantity}
        handleQuantity={handleQuantity}
      />

      <Box
        sx={{
          width: "130px",
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" component="span">
          ${priceFormatter(total)}
        </Typography>
        {totalQuantity > 1 && (
          <Typography variant="caption" component="span">
            {totalQuantity}x ${price}
          </Typography>
        )}
      </Box>
    </Card>
  );
};

export default CartListItem;

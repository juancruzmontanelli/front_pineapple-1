import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { totalPriceFormatter } from "../utils/formatter";
import { isNumeric } from "../utils/validation";
import CartQuantitySelector from "./CartQuantitySelector";
import {
  incrementQuantity,
  decrementQuantity,
  setQuantity,
  removeProduct,
} from "../state/cart";
import { useDispatch } from "react-redux";

const CartListItem = ({ data }) => {
  const { id, title, img, quantity, price } = data;
  const dispatch = useDispatch();
  const total = quantity * price;

  const handleQuantity = (type, total) => {
    if (type === "decrement" && quantity === 1) return false;
    if (type === "set" && (!isNumeric(total) || total === Number(0)))
      return false;

    if (type === "set") {
      dispatch(setQuantity({ id, quantity: Number(total) }));
    } else if (type === "increment") {
      dispatch(incrementQuantity(id));
    } else if (type === "decrement") {
      dispatch(decrementQuantity(id));
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeProduct(id));
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
        image={img}
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
          onClick={handleRemoveItem}
        >
          Eliminar
        </Button>
      </CardContent>

      <CartQuantitySelector value={quantity} handleQuantity={handleQuantity} />

      <Box
        sx={{
          width: "130px",
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" component="span">
          ${totalPriceFormatter(total)}
        </Typography>
        {quantity > 1 && (
          <Typography variant="caption" component="span">
            {quantity}x ${price}
          </Typography>
        )}
      </Box>
    </Card>
  );
};

export default CartListItem;

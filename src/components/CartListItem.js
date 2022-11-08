import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeProduct } from "../state/cart";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { totalPriceFormatter } from "../utils/formatter";
import { isNumeric } from "../utils/validation";

import CartQuantitySelector from "./CartQuantitySelector";

const CartListItem = ({ data }) => {
  const { id, name, img, quantity, price } = data;
  const dispatch = useDispatch();
  const total = quantity * price;

  const handleQuantity = (type, total = quantity) => {
    if (type === "decrement" && quantity === 1) return false;
    if (type === "set" && (!isNumeric(total) || Number(total) === 0))
      return false;

    dispatch(updateQuantity({ id, type, quantity: Number(total) }));
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
        alt={name}
      />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" component="p" sx={{ pl: "5px" }}>
          {name}
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

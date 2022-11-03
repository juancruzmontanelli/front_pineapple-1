import { Add, Remove } from "@mui/icons-material";
import { IconButton, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CartQuantitySelector = ({ value, handleQuantity }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "120px",
        backgroundColor: "#fff",
        border: "1px solid #eee",
        borderRadius: "4px",
        p: "4px",
      }}
    >
      <IconButton color="primary" onClick={() => handleQuantity("decrement")}>
        <Remove />
      </IconButton>
      <InputBase
        sx={{ flex: 1 }}
        inputProps={{
          inputMode: "numeric",
          sx: { textAlign: "center", fontWeight: "bold" },
        }}
        value={value}
        onChange={(e) => handleQuantity("set", e.target.value)}
      />
      <IconButton color="primary" onClick={() => handleQuantity("increment")}>
        <Add />
      </IconButton>
    </Box>
  );
};

export default CartQuantitySelector;

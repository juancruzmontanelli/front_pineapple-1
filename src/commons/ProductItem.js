import React from "react";
import { Button, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/system";

const ProductItem = () => {
  return (
    <Grid xs={3} item>
      <ItemLink href="/">
        <img
          style={{ width: "100%" }}
          alt=""
          src="https://tienda.personal.com.ar/_next/image?url=https%3A%2F%2Ftienda.personal.com.ar%2Fimages%2FS22_Ultra_FIT_min_dbaf5f0eac.png&w=1080&q=75"
        />
      </ItemLink>
      <ItemDescription>
        <ItemLink href="/">
          <ItemTitle>Samsung Galaxy S22</ItemTitle>
        </ItemLink>
        <Rating
          name="read-only"
          value={4}
          size="small"
          sx={{ mt: "4px" }}
          readOnly
        />
        <ItemPrice>$120.870</ItemPrice>
        <Button variant="text" size="small">
          Ver más detalles
        </Button>
      </ItemDescription>
    </Grid>
  );
};

const ItemLink = styled("a")({
  textDecoration: "none",
});

const ItemTitle = styled(Typography)({
  fontSize: "16px",
});

const ItemDescription = styled(Box)({
  padding: 10,
  textAlign: "center",
});

const ItemPrice = styled(Typography)({
  fontSize: "18px",
});

export default ProductItem;

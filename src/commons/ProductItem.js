import React from "react";
import { Button, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";


const ProductItem = ( { data } ) => {
  return (
    <Grid xs={3} item component={Link} to={`/product/${data.id}`}>
      <ItemLink href="/">
        <img
          style={{ width: "100%" }}
          alt=""
          src={data.img}
        />
      </ItemLink>
      <ItemDescription>
        <ItemLink href="/">
          <ItemTitle>{data.name}</ItemTitle>
        </ItemLink>
        <Rating
          name="read-only"
          value={4}
          size="small"
          sx={{ mt: "4px" }}
          readOnly
        />
        <ItemPrice>${data.price}</ItemPrice>
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

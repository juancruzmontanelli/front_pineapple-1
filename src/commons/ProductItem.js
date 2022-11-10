import React, { useState, useEffect } from "react";
import { Button, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import axios from 'axios'
import { Height } from "@mui/icons-material";



const ProductItem = ( { data } ) => {

  const [rating, setRating] = useState(null)

  useEffect(() => {
    axios
      .get(`/api/comment/${data.url}`)
      .then((res) => setRating(res.data.promedio))
      .catch((err) => {
        console.log(err);
      });
  }, [data.url]);

  return (
    <Grid xs={3} item component={Link} to={`/product/${data.url}`} style={{ textDecoration: "none" }}>
      <Grid>
        <img
          style={{ width: "50%", Height: "50%" }}
          alt=""
          src={data.img}
        />
      </Grid>
      <ItemDescription>
        <Grid>
          <ItemTitle>{data.name}</ItemTitle>
        </Grid>
        <Rating
          name="read-only"
          value={Number(rating)}
          size="small"
          sx={{ mt: "4px" }}
          readOnly
        />
        <ItemPrice>US$ {data.price}</ItemPrice>
        <Button variant="text" size="small">
          Ver más detalles
        </Button>
      </ItemDescription>
    </Grid>
  );
};


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

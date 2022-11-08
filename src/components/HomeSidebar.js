import { Grid, Typography, Button, styled, Box } from "@mui/material"
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { filterBrandProducts } from "../state/products";
import { filterPriceProducts } from "../state/products";
import axios from "axios";

const HomeSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const StyledButton = styled(Button)({
    textTransform: "none",
    color: "black",
    justifyContent: "left",
    height: "30px",
    width: '70%'
  });

  const handleFilter = (event) => {
    event.preventDefault();

    axios
      .get(`/api/search/filter?model=${event.target.value}`)
      .then((res) => dispatch(filterBrandProducts(res.data)))
      .then(() => navigate(`/search/brand`))
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePrice = (event) => {
    event.preventDefault();

    axios
      .get(`/api/search/filter?min=${event.target.value}&max=${event.target.name}`)
      .then((res) => dispatch(filterPriceProducts(res.data)))
      .then(() => navigate(`/search/price`))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Grid
      xs={3}
      item
      display="flex"
      flexDirection="column"
      justifyContent="left"
      alignContent="left"
    >
      <Typography sx={{ fontSize: "24px", fontWeight: "300", mb: "20px" }}>
        Filtrar por
      </Typography>

      <Box
        sx={{ mb: "10px" }}
        display="flex"
        flexDirection="column"
        justifyContent="left"
        alignContent="left"
      >
        <FilterType>Marcas</FilterType>
        <StyledButton
          value="Apple"
          onClick={handleFilter}
        >
          Apple
        </StyledButton>

        <StyledButton
          value="Samsung"
          onClick={handleFilter}
        >
          Samsung
        </StyledButton>

        <StyledButton
          value="Xiaomi"
          onClick={handleFilter}
        >
          Xiaomi
        </StyledButton>

        <StyledButton
          value="OnePlus"
          onClick={handleFilter}
        >
          OnePlus
        </StyledButton>

        <StyledButton
          value="Realme"
          onClick={handleFilter}
        >
          Realme
        </StyledButton>

        <StyledButton
          value="LG"
          onClick={handleFilter}
        >
          LG
        </StyledButton>

        <StyledButton
          value="Oppo"
          onClick={handleFilter}
        >
          Oppo
        </StyledButton>
      </Box>

      <Box
        sx={{ mb: "10px" }}
        display="flex"
        flexDirection="column"
        justifyContent="left"
        alignContent="left"
      >
        <FilterType>Precios</FilterType>
        <StyledButton
          value={0}
          name={300}
          onClick={handlePrice}
        >
          Hasta US$300
        </StyledButton>

        <StyledButton
          value={301}
          name={1000}
          onClick={handlePrice}
        >
          Entre US$300 y US$1000
        </StyledButton>

        <StyledButton
          value={1001}
          name={5000}
          onClick={handlePrice}
        >
          Más de US$1000
        </StyledButton>
      </Box>
    </Grid>
  );
};

const FilterType = styled(Typography)({
  fontSize: "18px",
});


export default HomeSidebar;

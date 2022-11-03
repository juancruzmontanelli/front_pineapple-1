import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const HomeSidebar = () => {
  return (
    <Grid xs={3} item>
      <Typography sx={{ fontSize: "24px", fontWeight: "300", mb: "20px" }}>
        Filtrar por
      </Typography>

      <Box sx={{ mb: "10px" }}>
        <FilterType>Marcas</FilterType>
        <FilterOptions>
          <a href="/">
            <FilterItem>Apple</FilterItem>
          </a>
          <a href="/">
            <FilterItem>Samsung</FilterItem>
          </a>
          <a href="/">
            <FilterItem>Xiaomi</FilterItem>
          </a>
          <a href="/">
            <FilterItem>HTC</FilterItem>
          </a>
          <a href="/">
            <FilterItem>Huawei</FilterItem>
          </a>
          <a href="/">
            <FilterItem>LG</FilterItem>
          </a>
        </FilterOptions>
      </Box>

      <Box>
        <FilterType>Precios</FilterType>
        <FilterOptions>
          <a href="/">
            <FilterItem>Hasta $40.000</FilterItem>
          </a>
          <a href="/">
            <FilterItem>Entre $40.000 y $80.000</FilterItem>
          </a>
          <a href="/">
            <FilterItem>Más de $100.000</FilterItem>
          </a>
        </FilterOptions>
      </Box>
    </Grid>
  );
};

const FilterType = styled(Typography)({
  fontSize: "18px",
});
const FilterOptions = styled(Stack)({
  "& a": {
    textDecoration: "none",
    color: "#333",
  },
});

const FilterItem = styled(Typography)({
  paddingLeft: "10px",
});

export default HomeSidebar;

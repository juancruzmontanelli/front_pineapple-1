import { Grid, Typography, Button, styled, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router";
import axios from "axios";
import { Delete } from "@mui/icons-material";

const HomeSidebar = () => {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();
  const isFilterActive = !useMatch("/");

  useEffect(() => {
    axios
      .get("/api/brand")
      .then((res) => setBrands(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const StyledButton = styled(Button)({
    textTransform: "none",
    color: "black",
    justifyContent: "left",
    height: "30px",
    width: "70%",
  });

  const handleFilter = (event) => {
    event.preventDefault();
    navigate(`/search/brand?model=${event.target.value}`);
  };

  const handlePrice = (event) => {
    event.preventDefault();
    navigate(
      `/search/price?min=${event.target.value}&max=${event.target.name}`
    );
  };

  const handleRemoveFilters = () => {
    navigate("/");
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
      {isFilterActive && (
        <Box>
          <Button
            startIcon={<Delete />}
            size="small"
            color="error"
            sx={{
              mb: "10px",
              mt: "-10px",
            }}
            onClick={handleRemoveFilters}
          >
            Quitar filtros
          </Button>
        </Box>
      )}
      <Box
        sx={{ mb: "10px" }}
        display="flex"
        flexDirection="column"
        justifyContent="left"
        alignContent="left"
      >
        <FilterType>Marcas</FilterType>
        {brands.map((brand) => {
          return (
            <StyledButton
              key={brand.id}
              value={brand.name}
              onClick={handleFilter}
            >
              {brand.name}
            </StyledButton>
          );
        })}
      </Box>

      <Box
        sx={{ mb: "10px" }}
        display="flex"
        flexDirection="column"
        justifyContent="left"
        alignContent="left"
      >
        <FilterType>Precios</FilterType>
        <StyledButton value={0} name={300} onClick={handlePrice}>
          Hasta US$300
        </StyledButton>

        <StyledButton value={301} name={1000} onClick={handlePrice}>
          Entre US$300 y US$1000
        </StyledButton>

        <StyledButton value={1001} name={5000} onClick={handlePrice}>
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

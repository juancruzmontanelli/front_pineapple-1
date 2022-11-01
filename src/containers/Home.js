import { Container, Grid } from "@mui/material";
import React from "react";
import HomeProducts from "../components/HomeProducts";
import HomeSidebar from "../components/HomeSidebar";

const Home = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <HomeSidebar />
        <HomeProducts />
      </Grid>
    </Container>
  );
};

export default Home;

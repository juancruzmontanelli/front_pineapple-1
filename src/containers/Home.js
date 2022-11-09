import { Grid } from "@mui/material";
import React from "react";
import SwipeableTextMobileStepper from "../components/Carousel";
import HomeProducts from "../components/HomeProducts";
import HomeSidebar from "../components/HomeSidebar";

const Home = () => {
  return (
    <Grid container spacing={2} >
      <HomeSidebar />
      <SwipeableTextMobileStepper />
      <HomeProducts />
    </Grid>
  );
};

export default Home;

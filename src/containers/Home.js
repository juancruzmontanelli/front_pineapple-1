import { Grid } from "@mui/material";
import React from "react";
import CarouselComponent from "../components/Carousel";
// import SwipeableTextMobileStepper from "../components/Carousel";
import HomeProducts from "../components/HomeProducts";
import HomeSidebar from "../components/HomeSidebar";

const Home = () => {
  return (
    <Grid container spacing={2} >
      <HomeSidebar />
      <CarouselComponent/>
      <HomeProducts />
    </Grid>
  );
};

export default Home;

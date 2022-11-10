import { Grid } from "@mui/material";
import React from "react";
import HomeProducts from "../components/HomeProducts";
import HomeSidebar from "../components/HomeSidebar";


const Home = () => {
  return (
    <Grid container spacing={2} >
      <HomeSidebar />
      <HomeProducts />
    </Grid>
  );
};

export default Home;

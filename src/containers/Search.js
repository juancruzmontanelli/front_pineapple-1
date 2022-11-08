import { Grid } from "@mui/material";
import React from "react";
import SearchProduct from "../components/SearchProduct";
import HomeSidebar from "../components/HomeSidebar";

const Search = () => {
  return (
    <Grid container spacing={2}>
      <HomeSidebar />
      <SearchProduct />
    </Grid>
  );
};

export default Search;
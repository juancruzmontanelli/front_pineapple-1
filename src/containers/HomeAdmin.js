import { Grid } from "@mui/material";
import { Routes, Route } from "react-router";
import AdminSidebar from "../components/AdminSidebar";
import AdminProducts from "../components/AdminProducts";
import AdminUsers from "../components/AdminUsers";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

import React from "react";
import AdminLogoHome from "../components/AdminLogoHome";

const HomeAdmin = () => {
  return (
    <Grid container spacing={2}>
      <AdminSidebar />

      <Grid item xs={9}>
        <Routes>
          <Route path="/" element={<AdminLogoHome />} />
          <Route path="/products" element={<AdminProducts />} />
          <Route path="/products/new" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<UpdateProduct />} />
          <Route path="/orders" element={<h1>Orders history</h1>} />
          <Route path="/users" element={<AdminUsers />} />
          <Route path="/brands" element={<h1>Brands list</h1>} />
          <Route path="/brands/new" element={<h1>New brand form</h1>} />
          <Route path="/brands/edit" element={<h1>Edit brand form</h1>} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default HomeAdmin;

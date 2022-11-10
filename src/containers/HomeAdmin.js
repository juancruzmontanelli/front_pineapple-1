import { Grid, Typography, Button } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router";
import AdminSidebar from "../components/AdminSidebar";
import AdminOrders from "../components/AdminOrders";
import AdminProducts from "../components/AdminProducts";
import AdminUsers from "../components/AdminUsers";
import AdminBrands from "../components/AdminBrands";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import { useSelector } from "react-redux";

import React from "react";
import AdminLogoHome from "../components/AdminLogoHome";

const HomeAdmin = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  if (user.isAdmin || user.SuperAdmin) {
    return (
      <Grid container spacing={2}>
        <AdminSidebar />

        <Grid item xs={9}>
          <Routes>
            <Route path="/" element={<AdminLogoHome />} />
            <Route path="/products" element={<AdminProducts />} />
            <Route path="/products/new" element={<AddProduct />} />
            <Route path="/products/edit/:id" element={<UpdateProduct />} />
            <Route path="/orders" element={<AdminOrders />} />
            <Route path="/users" element={<AdminUsers />} />
            <Route path="/brands" element={<AdminBrands />}/>
          </Routes>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid sx={{mt:'10%'}}container spacing={2} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Grid item xs={12}>
          <Routes>
            <Route
              path="/"
              element={
                <Grid>
                  <Typography>
                    Usted no cuenta con acceso a esta página
                  </Typography>
                  <Button onClick={handleHome}>Volver al home</Button>
                </Grid>
              }
            />
          </Routes>
        </Grid>
      </Grid>
    );
  }
};

export default HomeAdmin;

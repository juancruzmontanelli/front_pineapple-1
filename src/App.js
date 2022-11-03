import React from "react";
import { Routes, Route } from "react-router";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./containers/Home";
import Login from "./containers/Login";
import CreateUser from "./containers/CreateUser";
import CreatesSuccess from "./containers/CreateSuccess";
import Cart from "./containers/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          {/* Rutas publicas */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<h1>Search</h1>} />
          <Route path="/product/:slug" element={<h1>Product</h1>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateUser />} />
          <Route path="/createSuccess" element={<CreatesSuccess />} />

          {/* Rutas de usuario [Solo logueado] */}
          <Route path="/account/orders" element={<h1>User orders</h1>} />
          <Route path="/account/orders/:id" element={<h1>Order details</h1>} />
          <Route path="/account/settings" element={<h1>User settings</h1>} />

          {/* Rutas de administrador */}
          <Route path="/admin/products" element={<h1>Products list</h1>} />
          <Route
            path="/admin/products/new"
            element={<h1>New product form</h1>}
          />
          <Route
            path="/admin/products/edit"
            element={<h1>Edit product form</h1>}
          />
          <Route path="/admin/orders" element={<h1>Orders history</h1>} />
          <Route path="/admin/users" element={<h1>Users List</h1>} />
          <Route path="/admin/brands" element={<h1>Brands list</h1>} />
          <Route path="/admin/brands/new" element={<h1>New brand form</h1>} />
          <Route path="/admin/brands/edit" element={<h1>Edit brand form</h1>} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;

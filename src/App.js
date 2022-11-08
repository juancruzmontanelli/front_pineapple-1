import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import { Container, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductPage from "./containers/ProductPage";
import Search from "./containers/Search";
import UserProfile from "./containers/UserProfile";
import Order from "./containers/Order";
import Home from "./containers/Home";
import Login from "./containers/Login";
import CreateUser from "./containers/CreateUser";
import CreatesSuccess from "./containers/CreateSuccess";
import Cart from "./containers/Cart";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./state/user";
import axios from "axios";
import AddProduct from "./containers/AddProduct";
import UpdateProduct from "./containers/UpdateProduct";
import { setCart } from "./state/cart";


function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get("/api/user/me")
      .then((user) => {
        dispatch(setUser(user.data));

        const userCart = user.data.items.map((item) => {
          return { ...item.product, quantity: item.quantity };
        });
        dispatch(setCart(userCart));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, user.id]);

  return (
    <Box display="flex" flexDirection="column">
      <Navbar />
      <Container flex={1} sx={{ minHeight: "calc(100vh - 301px)" }}>
        <Routes>
          {/* Rutas publicas */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateUser />} />
          <Route path="/createSuccess" element={<CreatesSuccess />} />

          {/* Rutas de usuario [Solo logueado] */}
          <Route path="/account/orders" element={<Order />} />
          <Route path="/account/orders/:id" element={<h1>Order details</h1>} />
          <Route path="/account/settings" element={<UserProfile />} />

          {/* Rutas de administrador */}
          <Route path="/admin/products" element={<h1>Products list</h1>} />
          <Route path="/admin/products/new" element={<AddProduct />} />
          <Route path="/admin/products/edit/:id" element={<UpdateProduct />} />
          <Route path="/admin/orders" element={<h1>Orders history</h1>} />
          <Route path="/admin/users" element={<h1>Users List</h1>} />
          <Route path="/admin/brands" element={<h1>Brands list</h1>} />
          <Route path="/admin/brands/new" element={<h1>New brand form</h1>} />
          <Route path="/admin/brands/edit" element={<h1>Edit brand form</h1>} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;

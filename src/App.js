import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import { Container, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductPage from "./containers/ProductPage";
import UserProfile from "./containers/UserProfile";
import HomeAdmin from "./containers/HomeAdmin";
import Order from "./containers/Order";
import Home from "./containers/Home";
import Login from "./containers/Login";
import CreateUser from "./containers/CreateUser";
import CreatesSuccess from "./containers/CreateSuccess";
import Cart from "./containers/Cart";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./state/user";
import axios from "axios";
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
          <Route path="/search/:type" element={<Home />} />
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
          <Route path="/admin/*" element={<HomeAdmin />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;

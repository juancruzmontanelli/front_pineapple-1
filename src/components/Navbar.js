import React from "react";
import SearchBar from "./SearchBar";
import MenuUser from "./MenuUser";
import logoPineapple from "../assets/logopineapple2.png";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import {
  AppBar,
  styled,
  Toolbar,
  Box,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const totalItemsCart = useSelector((state) => state.cart.items.length);

  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const StyledButton = styled(Button)({
    color: "#ed7203",
  });
  const LoginBox = styled(Box)({
    display: "flex",
    gap: 10,
  });

  return (
    <>
      <AppBar sx={{ background: "black"}} position={"static"}>
        <StyledToolBar>
          <>
            <Box display="flex" gap={5}>
              <Link to="/">
                <img
                  src={logoPineapple}
                  alt="logo pineapple"
                  height={50}
                  style={{ marginLeft: "40px" }}
                />
              </Link>
            </Box>
            <SearchBar />
            {user.id ? (
              <MenuUser />
            ) : (
              <LoginBox>
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  <StyledButton>Iniciar sesión</StyledButton>
                </Link>
                <Link to={"/register"} style={{ textDecoration: "none" }}>
                  <StyledButton>Registro</StyledButton>
                </Link>
                <Link to="/cart">
                  <IconButton sx={{ color: "#ed7203" }} aria-label="cart">
                    <Badge badgeContent={totalItemsCart} color="secondary">
                      <LocalGroceryStoreIcon />
                    </Badge>
                  </IconButton>
                </Link>
              </LoginBox>
            )}
          </>
        </StyledToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;

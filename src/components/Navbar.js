import React from "react";
import SearchBar from "./SearchBar";
import MenuBrands from "./MenuBrands";
import DrawerComp from "./Drawer";
import logoPineapple from "../assets/logopineapple2.png";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import {
  AppBar,
  styled,
  Toolbar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Badge,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
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
      <AppBar sx={{ background: "black", mb: "10px" }} position={"static"}>
        <StyledToolBar>
          {isMatch ? (
            <>
              <DrawerComp />
              <SearchBar />
              <IconButton sx={{ color: "#ed7203" }}>
                <LocalGroceryStoreIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Box display="flex" gap={5}>
                <MenuBrands />
                <Link to="/">
                  <img src={logoPineapple} alt="logo pineapple" height={50} />
                </Link>
              </Box>
              <Box>
                <SearchBar />
              </Box>
              <LoginBox>
                <Link to={"/login"}>
                  <StyledButton>Iniciar sesión</StyledButton>
                </Link>
                <Link to={"/register"}>
                <StyledButton>Registro</StyledButton>
                </Link>
                <Link to="/cart">
                  <IconButton sx={{ color: "#ed7203" }} aria-label="cart">
                    <Badge badgeContent={4} color="secondary">
                      <LocalGroceryStoreIcon />
                    </Badge>
                  </IconButton>
                </Link>
              </LoginBox>
            </>
          )}
        </StyledToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;

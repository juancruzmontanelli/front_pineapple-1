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
} from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const StyledButton = styled(Button)({
    color: "orange",
  });
  const LoginBox = styled(Box)({
    display: "flex",
    gap: 10,
  });

  return (
    <>
      <AppBar sx={{ background: "black" }} position={"static"}>
        <StyledToolBar>
          {isMatch ? (
            <>
              <DrawerComp />
              <SearchBar />
              <IconButton sx={{ color: "orange" }}>
                <LocalGroceryStoreIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Box display="flex" gap={5}>
                <MenuBrands />
                <img src={logoPineapple} alt="logo pineapple" height={50} />
              </Box>
              <Box>
                <SearchBar />
              </Box>
              <LoginBox>
                <StyledButton>Iniciar sesión</StyledButton>
                <StyledButton>Registro</StyledButton>
                <IconButton sx={{ color: "orange" }} aria-label="search">
                  <LocalGroceryStoreIcon />
                </IconButton>
              </LoginBox>
            </>
          )}
        </StyledToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;

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
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Typography
} from "@mui/material";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../state/user"
import axios from 'axios'

const Navbar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const totalItemsCart = useSelector((state) => state.cart.length);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseLogOut = () => {
    setAnchorElUser(null);

    axios.post('/api/user/logout')
    .then(()=>dispatch(logOut()))
    .catch(err => console.log(err))
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

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
              {user.id ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar>{user.name.slice(0, 1)}</Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}><Typography>Perfil</Typography></MenuItem>
                    <MenuItem onClick={handleCloseLogOut}><Typography>Cerrar sesión</Typography></MenuItem>
                  </Menu>
                </Box>
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
                      <Badge badgeContent={4} color="secondary">
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

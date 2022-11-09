import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import {
  Box,
  IconButton,
  Badge,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../state/user";
import axios from "axios";
import { cleanCart } from "../state/cart";

const MenuUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const totalItemsCart = useSelector((state) => state.cart.length);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseProfile = () => {
    setAnchorElUser(null);
    navigate("/account/settings");
  };
  const handleCloseAdmin = () => {
    setAnchorElUser(null);
    navigate("/admin");
  };

  const handleCloseLogOut = () => {
    setAnchorElUser(null);

    axios
      .post("/api/user/logout")
      .then(() => {
        dispatch(logOut());
        dispatch(cleanCart());
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  if(user.isAdmin || user.SuperAdmin) {
    return (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar>{user.name.slice(0, 1)}</Avatar>
          </IconButton>
        </Tooltip>
        <Link to="/cart">
          <IconButton sx={{ color: "#ed7203", ml: "10px" }} aria-label="cart">
            <Badge badgeContent={totalItemsCart} color="secondary">
              <LocalGroceryStoreIcon />
            </Badge>
          </IconButton>
        </Link>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseProfile}>
            <Typography>Perfil</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseAdmin}>
            <Typography>Panel de administrador</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseLogOut}>
            <Typography>Cerrar sesión</Typography>
          </MenuItem>
        </Menu>
      </Box>
    );
  } else {
    return (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar>{user.name.slice(0, 1)}</Avatar>
          </IconButton>
        </Tooltip>
        <Link to="/cart">
          <IconButton sx={{ color: "#ed7203", ml: "10px" }} aria-label="cart">
            <Badge badgeContent={totalItemsCart} color="secondary">
              <LocalGroceryStoreIcon />
            </Badge>
          </IconButton>
        </Link>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseProfile}>
            <Typography>Perfil</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseLogOut}>
            <Typography>Cerrar sesión</Typography>
          </MenuItem>
        </Menu>
      </Box>
    );
  }

  
};

export default MenuUser;

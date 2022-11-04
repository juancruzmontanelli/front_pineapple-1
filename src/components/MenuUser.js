import React from 'react'
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
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../state/user";
import axios from "axios";


const MenuUser = () => {
  
    const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const totalItemsCart = useSelector((state) => state.cart.length);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseLogOut = () => {
    setAnchorElUser(null);

    axios
      .post("/api/user/logout")
      .then(() => dispatch(logOut()))
      .catch((err) => console.log(err));
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar>{user.name.slice(0, 1)}</Avatar>
                  </IconButton>
                </Tooltip>
                <Link to="/cart">
                  <IconButton sx={{ color: "#ed7203", ml:'10px' }} aria-label="cart">
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
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography>Perfil</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseLogOut}>
                    <Typography>Cerrar sesión</Typography>
                  </MenuItem>
                </Menu>
              </Box>
  )
}

export default MenuUser
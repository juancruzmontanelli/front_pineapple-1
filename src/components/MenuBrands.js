import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Box } from "@mui/material";
import axios from "axios";
import { filterBrandProducts } from "../state/products";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const MenuBrands = () => {
  const brands = [
    "Apple",
    "Samsung",
    "Xiaomi",
    "OnePlus",
    "Realme",
    "LG",
    "Oppo",
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBrand = (event) => {
    event.preventDefault();

    axios
      .get(`/api/search/filter?model=${event.currentTarget}`)
      .then((res) => dispatch(filterBrandProducts(res.data)))
      .then(() => navigate(`/search/brand`))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton
        sx={{ color: "#ed7203" }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "20ch",
          },
        }}
      >
        {brands.map((brand, index) => (
          <MenuItem key={index} onClick={handleBrand} value={brand}>
            {brand} 
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MenuBrands;

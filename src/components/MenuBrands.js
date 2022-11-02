import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const brands = ["Motorola", "Samsung", "Apple", "TCL", "Xiaomi", "Huawei", "LG"];

const MenuBrands = () => {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
          <MenuItem
            key={index}
            onClick={handleClose}
          >
            {brand}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuBrands;

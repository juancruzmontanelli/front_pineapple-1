import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, styled, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { searchProducts } from "../state/products";
import axios from "axios";
import { useNavigate } from "react-router";



const SearchBox = styled(Box)({
  display: "flex",
  width: "100%",
});

const SearchBar = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchedValue(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`/api/search?str=${searchedValue}`)
      .then((res) => dispatch(searchProducts(res.data)))
      .then(() => navigate("/search/products"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SearchBox>
          <TextField
            id="full-width-text-field"
            onChange={handleSearch}
            placeholder="Buscá tu celular..."
            size="small"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              width: "100%",
            }}
            InputProps={{
              startAdornment: (
                <IconButton sx={{ color: "#ed7203" }} type="submit">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          ></TextField>
        </SearchBox>
      </form>
    </>
  );
};

export default SearchBar;

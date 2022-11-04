import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, styled, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { setSearch } from "../state/search";
import axios from "axios";

const SearchBox = styled(Box)({
  display: "flex",
  width: "100%",
});

const SearchBar = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const [foundedData, setFoundedData] = useState([]);
  const dispatch = useDispatch();


  const handleSearch = (e) => {
    setSearchedValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get("/api/search")
      .then((res) => setFoundedData(res.data))
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
            value={searchedValue}
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

import React, { useState } from "react";
import { Box, styled, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = styled(Box)({
  display: "flex",
  width: "100%",
});

const SearchBar = () => {
  const [searchedValue, setSearchedValue] = useState("");

  const handleSearch = (e) => {
    setSearchedValue(e.target.value);
  };

  return (
    <>
      <form>
        <SearchBox>
          <TextField
            id="full-width-text-field"
            value={searchedValue}
            onChange={handleSearch}
            placeholder="Buscá tu próximo celular..."
            size="small"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              width: "100%",
            }}
            InputProps={{
              startAdornment: (
                <IconButton sx={{color:'orange'}} type="submit">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          >
          </TextField>
        </SearchBox>
      </form>
    </>
  );
};

export default SearchBar;

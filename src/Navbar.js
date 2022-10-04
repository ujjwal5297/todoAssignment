import React from "react";

import { Stack } from "@mui/system";
import SearchBar from "./SearchBar";

const Navbar = ({ searchInput, setSearchInput, handleChange }) => {
  return (
    <Stack>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleChange={handleChange}
      />
    </Stack>
  );
};

export default Navbar;

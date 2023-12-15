import { Search } from "@mui/icons-material";
import { InputBase } from "@mui/material";
import React, { useState } from "react";

interface SearchProps {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  searchText: string;
}

const SearchBar: React.FC<SearchProps> = ({ setSearchText, searchText }) => {
  return (
    <div className="w-auto h-10 items-center rounded-lg text-gray-900 bg-gray-100">
      <Search fontSize={"small"} sx={{ mx: 1 }} />
      <InputBase
        placeholder={"Search"}
        sx={{
          flex: 1,
          "& input": {
            backgroundColor: "transparent",
            fontSize: 14,
          },
        }}
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;

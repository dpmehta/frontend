import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";

const SearchPage = () => {
  return (
    <>
      <NavBar />
      <div className="searchMenu mt-4">
        <SearchBar />
        <DropDown />
        <DropDown />
      </div>
    </>
  );
};

export default SearchPage;

import React from "react";

const SearchMovie = (props) => {
  return (
    <header>
      <input
        className="search"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Search"
      ></input>
    </header>
  );
};

export default SearchMovie;

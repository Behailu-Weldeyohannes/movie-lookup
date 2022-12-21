import React, { useState, useEffect } from "react";
import "./App.css";
import MovieItem from "./MovieItem";
import MovieItemHeading from "./MovieItemHeading";
import SearchMovie from "./SearchMovie";

const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const apiKey = "e122c586";
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="">
      <div className="">
        <MovieItemHeading heading="Movie Finder" />
        <SearchMovie
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="movie">
        <MovieItem movies={movies} />
      </div>
    </div>
  );
};

export default App;

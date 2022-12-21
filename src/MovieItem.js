import React from "react";

const MovieItem = (props) => {
  return (
    <div className="movie">
      {props.movies.map((movie) => (
        <div className="image-container">
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </div>
  );
};

export default MovieItem;

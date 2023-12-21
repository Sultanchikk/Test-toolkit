import React from "react";
import "./movieListing.scss";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard";

const MovieListing = () => {
  const { movies, shows } = useSelector((state) => state.movie);
  let renderMovies = "";
  let renderShows = "";
  React.useEffect(() => {
    console.log(movies);
    console.log(status);
  }, [movies, status]);

  renderMovies =
    movies?.Response === "True" ? (
      movies?.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div>
        <h3>{movies?.Error}</h3>
      </div>
    );
  renderShows =
    shows?.Response === "True" ? (
      shows?.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div>
        <h3>{shows?.Error}</h3>
      </div>
    );
  return (
    <div>
      <div className="movie-wrap">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">{renderMovies}</div>
        </div>
        <div className="show-list">
          <h2>Shows</h2>
          <div className="movie-container">{renderShows}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;

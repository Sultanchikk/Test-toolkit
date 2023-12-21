import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovies, getShows } from "../../store/slices/movieSlice";
import MovieListing from "../../components/MovieListing/Index";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies({ searchValue: "Marvel" }));
    dispatch(getShows());
  }, [dispatch]);
  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;

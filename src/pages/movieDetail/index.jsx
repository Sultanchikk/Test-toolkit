import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../../store/slices/movieSlice";
import { useParams } from "react-router-dom";
import "./movieDetail.scss";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { movieInfo } = useSelector((state) => state.movie);

  const { movieId } = useParams();
  React.useEffect(() => {
    dispatch(getMovieById(movieId));
  }, []);
  React.useEffect(() => {
    console.log(movieInfo);
  }, [movieInfo]);
  return (
    <div className="movie-section">
      {Object.keys(movieInfo).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{movieInfo.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i>
                {movieInfo.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thums-up"></i>
                {movieInfo.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i>
                {movieInfo.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i>
                {movieInfo.Year}
              </span>
            </div>
            <div className="movie-plot">{movieInfo.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span> {movieInfo.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span> {movieInfo.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{movieInfo.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{movieInfo.Languages}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{movieInfo.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={movieInfo.Poster} alt={movieInfo.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../common/api/movieApi";
import { APIKey } from "../../common/api/MovieApiKey";

export const getMovies = createAsyncThunk("movies/getMovies", async ({ searchValue }) => {
  const response = api.get(`?apiKey=${APIKey}&s=${searchValue}&type=movie`);
  return response;
});

export const getShows = createAsyncThunk("movies/getShows", async () => {
  const response = await api.get(`?apiKey=${APIKey}&s=${"Solo Leveling"}&type=series`);
  return response;
});

export const getMovieById = createAsyncThunk("movie/getMovieById", async (imdbID) => {
  const response = await api.get(`?apiKey=${APIKey}&i=${imdbID}`);
  return response.data;
});

const initialState = {
  movies: [],
  shows: [],
  movieInfo: {},
  status: "loading",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  // reducers: {},
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.status = state.status;
    },
    [getMovies.fulfilled.type]: (state, action) => {
      state.status = "success";
      state.movies = action.payload.data;
    },
    [getMovies.rejected]: (state) => {
      state.status = "error";
      state.movies = [];
    },
    [getShows.fulfilled.type]: (state, action) => {
      state.shows = action.payload.data;
    },
    [getMovieById.fulfilled.type]: (state, action) => {
      state.movieInfo = action.payload;
    },
  },
});

export const {} = movieSlice.actions;
export default movieSlice.reducer;

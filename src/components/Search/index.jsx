import React from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { getMovies } from "../../store/slices/movieSlice";

const Search = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getMovies({ searchValue }));
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search movie..."
      />
      ;
    </form>
  );
};

export default Search;

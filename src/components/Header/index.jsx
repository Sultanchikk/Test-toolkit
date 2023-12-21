import React from "react";
import "./header.scss";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";
import Search from "../Search";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <Search />
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;

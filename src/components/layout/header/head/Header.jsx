import React, { useState } from "react";
import "./header.scss";
import Nav from "../nav/Nav";
import Logo from "../../../reusables/Logo";
import SearchForm from "../../../reusables/form/SearchForm";

const Header = ({ ...props }) => {
  return (
    <header className="header">
      <Logo />
      <SearchForm {...props} />
      <Nav />
    </header>
  );
};

export default Header;

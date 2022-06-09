import React from "react";
import "./header.scss";
import Nav from "../nav/Nav";
import Logo from "../../../reusables/Logo";
import SearchForm from "../../../reusables/form/SearchForm";

const Header = () => {
  return (
    <header className="header">
      <h1> Hello Header</h1>
      <Logo />
      <SearchForm />
      <Nav />
    </header>
  );
};

export default Header;

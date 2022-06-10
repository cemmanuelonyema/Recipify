import React, { Fragment } from "react";
import "./App.module.scss";
import Header from "./components/layout/header/head/Header";
import Main from "./components/layout/main/Main";
import Footer from "./components/layout/footer/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
};

export default App;

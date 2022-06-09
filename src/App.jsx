import React, { Fragment } from "react";
import "./App.module.scss";
import Body from "./components/layout/body/Body";
import Header from "./components/layout/header/head/Header";
import Sidebar from "./components/layout/sidebar/side/Sidebar";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <Body />
    </Fragment>
  );
};

export default App;

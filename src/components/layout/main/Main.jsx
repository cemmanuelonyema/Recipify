import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Body from "./body/Body";

const Main = () => {
  return (
    <main style={mainStyle}>
      <Sidebar />
      <Body />
    </main>
  );
};

const mainStyle = {
  display: "flex",
};

export default Main;

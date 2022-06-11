import React, { useState, Fragment } from "react";
import axios from "axios";
import "./App.module.scss";
import Header from "./components/layout/header/head/Header";
import Main from "./components/layout/main/Main";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const searchRecipes = async (text) => {
    setLoading(true);
    // const res = await axios
    //   .get
    //   //   `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    //   ();
    // const data = res.data.data.recipe;
    setData(data);
    setLoading(false);
    console.log(text);
  };

  const searchRecipe = () => {};
  return (
    <Fragment>
      <Header searchRecipe={searchRecipes} />
      <Main />
    </Fragment>
  );
};

export default App;

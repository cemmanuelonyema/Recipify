import React, { Fragment } from "react";
import axios from "axios";
import Header from "./components/layout/header/head/Header";
import Main from "./components/layout/main/Main";

const App = () => {
  const searchRecipes = async () => {
    const res = await axios.get(
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
    );
    const { recipe } = res.data.data;
    console.log(res.data.data);
    console.log(recipe);
  };

  searchRecipes();
  return (
    <Fragment>
      <Header searchRecipes={searchRecipes} />
      <Main />
    </Fragment>
  );
};

// search;

export default App;

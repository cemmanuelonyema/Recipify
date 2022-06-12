import React, { Fragment, useState } from "react";
import axios from "axios";
import Header from "./components/layout/header/head/Header";
import Main from "./components/layout/main/Main";

const App = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRecipes = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
    );
    const { recipe } = res.data.data;
    setRecipeData(recipe);
    console.log(recipeData);
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

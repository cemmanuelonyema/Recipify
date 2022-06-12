import React, { useState } from "react";
import PropTypes from "prop-types";
import "./searchForm.scss";

const SearchForm = ({ placeholder, searchRecipe }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => setInputText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRecipe(inputText);
    setInputText("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="text"
        type="text"
        id="search"
        className="form__input"
        value={inputText}
        onChange={handleChange}
        placeholder={placeholder}
      />

      <button className="btn form__btn" type="search">
        <svg className="search__icon">
          <use href="/img/icons.svg#icon-search"></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
};

SearchForm.defaultProps = {
  placeholder: "Search over 1,000,000 recipes...",
};

SearchForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  //   handleChange: PropTypes.func.isRequired,
};

export default SearchForm;

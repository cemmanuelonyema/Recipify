import React from "react";
import InputField from "./inputfield/InputField";
import "./searchForm.scss";

const SearchForm = () => {
  return (
    <form className="form">
      {/* <input
        type="text"
        className="form__input"
        placeholder="Search over 1,000,000 recipes..."
      /> */}
      <InputField />

      <button className="btn form__btn" type="search">
        <svg className="search__icon">
          <use href="/img/icons.svg#icon-search"></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;

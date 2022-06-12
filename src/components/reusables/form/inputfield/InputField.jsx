import React, { useState } from "react";
import "./inputfield.scss";

const InputField = () => {
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => setInputText(e.target.value);

  return (
    <input
      name="search"
      type="text"
      id="search"
      value={inputText}
      placeholder="Search over 1,000,000 recipes..."
      onChange={handleChange}
    />
  );
};

export default InputField;

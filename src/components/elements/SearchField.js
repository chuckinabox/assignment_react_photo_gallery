import React from "react";

const SearchField = props => {
  const { value, onChange, name } = props;
  return (
    <div>
      <label>Search:</label>
      <input
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
        type="text"
      />
    </div>
  );
};

export default SearchField;

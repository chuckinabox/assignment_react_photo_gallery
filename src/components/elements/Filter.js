import React from "react";

const Filter = props => {
  const { filters, value, onChange, name } = props;
  const filterElements = filters.map(filter => (
    <option key={filter} value={filter}>
      {filter}
    </option>
  ));
  return (
    <div>
      <label>Filter</label>
      <select
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      >
        {filterElements}
      </select>
    </div>
  );
};

export default Filter;

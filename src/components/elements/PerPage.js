import React from "react";

const PerPage = props => {
  const { name, value, onChange } = props;
  const perPageCount = [1, 2, 4, 5, 10, 15, 50];
  const PerPageElements = perPageCount.map(perPage => (
    <option key={perPage} value={perPage}>
      {perPage}
    </option>
  ));
  return (
    <div>
      <label>Per-Page</label>
      <select
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      >
        {PerPageElements}
      </select>
    </div>
  );
};

export default PerPage;

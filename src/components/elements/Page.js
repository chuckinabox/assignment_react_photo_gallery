import React from "react";

const Page = props => {
  const { photolist, value, onChange, name } = props;
  let pageElements = [];
  for (var i = 1; i < photolist.length / 12 + 1; i++) {
    pageElements.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div>
      <label>Page</label>
      <select
        className="form-control"
        value={value}
        name={name}
        onChange={onChange}
      >
        {" "}
        {pageElements}
      </select>
    </div>
  );
};

export default Page;

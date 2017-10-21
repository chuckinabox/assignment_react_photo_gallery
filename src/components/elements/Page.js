import React from "react";

const Page = props => {
  const { photolist, value, onChange, name, perPage } = props;
  let pageElements = [];
  if (perPage <= 0) {
    pageElements.push(
      <option key={1} value={1}>
        {" "}
        1{" "}
      </option>
    );
  } else {
    for (var i = 1; i < photolist.length / perPage + 1; i++) {
      pageElements.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
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

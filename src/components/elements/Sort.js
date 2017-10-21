import React from "react";

const Sort = props => {
  const { sortdate, sortlikes, sortcomments, sorttags, onClick } = props;
  const sortBy = ["date", "likes", "comments", "tags"];
  const sortByStates = [sortdate, sortlikes, sortcomments, sorttags];
  let sortElements = sortBy.map((sort, index) => (
    <button
      key={sort}
      onClick={onClick}
      name={"sort" + sortBy[index]}
      value={sortByStates[index]}
      className={
        sortByStates[index] === 2
          ? "btn btn-primary"
          : sortByStates[index] === 1 ? "btn btn-success" : "btn btn-default"
      }
    >
      {sort}
    </button>
  ));

  return (
    <div>
      <label>Sort By:</label>
      <div>{sortElements}</div>
      <p>Green = Ascending</p>
      <p>Blue = Descending</p>
    </div>
  );
};

export default Sort;

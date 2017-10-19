import React from "react";

const SinglePhoto = props => {
  const { photolist, ...restOfProps } = props;
  const photoElements = photolist.map(photolist => (
    <img src={photolist} key={photolist} alt="" />
  ));
  return <div {...restOfProps}>{photoElements}</div>;
};

export default SinglePhoto;

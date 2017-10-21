import React from "react";

const SinglePhoto = props => {
  const { photolist, pageMin, pageMax, pageValue, ...restOfProps } = props;
  let photoElements = [];
  if (!photolist.length) {
    photoElements = [
      <div className="col-sm-3 bordered singlePhoto">
        <h1>Sorry, No Results</h1>
      </div>
    ];
  } else {
    photoElements = photolist.map(photolist => (
      <div className="col-sm-3 bordered singlePhoto" key={photolist.id}>
        <a href={"http://www.instagram.com/" + photolist.user.username}>
          <p>{photolist.user.username}</p>
        </a>

        <p>
          {new Date(Number(photolist.created_time)).getMonth() + 1}/{new Date(Number(photolist.created_time)).getDay()}/{new Date(Number(photolist.created_time)).getFullYear()}
        </p>
        <p>
          {new Date(Number(photolist.created_time)).getHours()}:{new Date(Number(photolist.created_time)).getMinutes()}:{new Date(Number(photolist.created_time)).getSeconds()}
        </p>
        <a href={photolist.link}>
          <img
            src={photolist.images.low_resolution.url}
            key={photolist.id}
            alt="**Photo Unavaiable**"
          />
        </a>
        <p>Caption: {photolist.caption.text}</p>
        {/* <p>Tags: {photolist.tags}</p> */}
        <p>Filter: {photolist.filter}</p>
        <p>Likes: {photolist.likes.count}</p>
        <p>Comments: {photolist.comments.count}</p>
      </div>
    ));
  }

  return <div {...restOfProps}>{photoElements}</div>;
};

export default SinglePhoto;

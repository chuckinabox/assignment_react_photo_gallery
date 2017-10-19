import React, { Component } from "react";
import photoData from "../data/photos";

import SinglePhoto from "./elements/SinglePhoto";

class Photos extends Component {
  render() {
    let photosToShow = [];

    for (var i = 0; i < photoData.data.length; i++) {
      if (photoData.data[i].type === "image") {
        console.log(photoData.data[i].images.low_resolution.url);
        photosToShow.push(photoData.data[i].images.low_resolution.url);
      }
    }
    return <SinglePhoto photolist={photosToShow} />;
  }
}

export default Photos;

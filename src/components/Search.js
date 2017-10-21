import React, { Component } from "react";
import photoData from "../data/photos";

import { removeNonImages, uniqueList } from "../helpers/dataSanitize";

import Filter from "./elements/Filter";
import SinglePhoto from "./elements/SinglePhoto";
import Page from "./elements/Page";
import Sort from "./elements/Sort";
import SearchField from "./elements/SearchField";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      filterValue: "No Filter",
      pageValue: "1",
      sortdate: 0,
      sortlikes: 0,
      sortcomments: 0,
      sorttags: 0,
      searchValue: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("change", e.target.name, e.target.value);
  };

  handleClick = e => {
    e.preventDefault();

    let targeted = e.target.name;

    this.setState(prevState => {
      if (prevState[targeted] === 0 || prevState[targeted] === 1) {
        return { [targeted]: prevState[targeted] + 1 };
      } else {
        return { [targeted]: 0 };
      }
    });
    console.log("click was", e.target.name, e.target.value);
  };

  render() {
    const {
      filterValue,
      pageValue,
      sortdate,
      sortlikes,
      sortcomments,
      sorttags,
      searchValue
    } = this.state;

    // //Filter out non images
    let photosToShow = removeNonImages(photoData);
    let filters = uniqueList(photosToShow, "filter");

    filters.push("No Filter");
    for (var j = 0; j < photosToShow.length; j++) {
      //Edit tags
      if (photosToShow[j].tags.length) {
        for (var k = 0; k < photosToShow[j].tags.length; k++) {
          photosToShow[j].tags[k] = " #" + photosToShow[j].tags[k] + " ";
        }
      }
      //Captions
      if (!photosToShow[j].caption) {
        photosToShow[j].caption = {
          text: ""
        };
      }
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <form className="col-sm-2">
            <Filter
              filters={filters}
              name="filterValue"
              value={filterValue}
              onChange={this.onChangeSearch}
            />
          </form>
          <div className="col-sm-1">
            <p>{photosToShow.length} results</p>
            <p>Showing 1-12 of {photosToShow.length}</p>
          </div>
          <div className="col-sm-1">
            <Page
              photolist={photosToShow}
              name="pageValue"
              value={pageValue}
              onChange={this.onChangeSearch}
            />
          </div>
          <div className="col-sm-4">
            <Sort
              sortdate={sortdate}
              sortlikes={sortlikes}
              sortcomments={sortcomments}
              sorttags={sorttags}
              onClick={this.handleClick}
            />
          </div>
          <div className="col-sm-2">
            <SearchField
              name="searchValue"
              value={searchValue}
              onChange={this.onChangeSearch}
            />
          </div>
        </div>
        <SinglePhoto
          className="col-sm-12"
          photolist={photosToShow}
          pageMin="1"
          pageMax="12"
        />
      </div>
    );
  }
}

export default Search;

import React, { Component } from "react";
import photoData from "../data/photos";

import { removeNonImages, uniqueList } from "../helpers/dataSanitize";

import {
  filterFilters,
  filterPage,
  filterSort,
  filterText
} from "../helpers/filter";

import Filter from "./elements/Filter";
import SinglePhoto from "./elements/SinglePhoto";
import Page from "./elements/Page";
import PerPage from "./elements/PerPage";
import Sort from "./elements/Sort";
import SearchField from "./elements/SearchField";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      filterValue: "No Filter",
      pageValue: 1,
      perPage: 1,
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
      perPage,
      sortdate,
      sortlikes,
      sortcomments,
      sorttags,
      searchValue
    } = this.state;

    //Filter out non images & data subdirectory
    let photosToShow = removeNonImages(photoData);
    //Unique Filter options from from data
    let filters = uniqueList(photosToShow, "filter");
    filters.push("No Filter");
    //Filter - Filters
    photosToShow = filterFilters(photosToShow, filterValue);
    //Filter - Sort
    photosToShow = filterSort(
      photosToShow,
      sortdate,
      sortlikes,
      sortcomments,
      sorttags
    );
    //Filter - Search Text Entered
    photosToShow = filterText(photosToShow, searchValue);

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
            <p>
              Showing {1 + perPage * (pageValue - 1)}
              -
              {perPage * pageValue > photosToShow.length
                ? photosToShow.length
                : perPage * pageValue}{" "}
              of {photosToShow.length}
            </p>
          </div>
          <div className="col-sm-1">
            <Page
              photolist={photosToShow}
              name="pageValue"
              value={pageValue}
              onChange={this.onChangeSearch}
              perPage={perPage}
            />
          </div>
          <div className="col-sm-1">
            <PerPage
              name="perPage"
              value={perPage}
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
          photolist={filterPage(photosToShow, perPage, pageValue)}
        />
      </div>
    );
  }
}

export default Search;

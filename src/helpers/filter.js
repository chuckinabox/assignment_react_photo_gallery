export function filterFilters(photoList, filter) {
  let photosToShow = [];
  if (filter === "No Filter" || !filter) {
    return photoList;
  } else {
    for (var i = 0; i < photoList.length; i++) {
      if (photoList[i].filter === filter) {
        photosToShow.push(photoList[i]);
      }
    }
    return photosToShow;
  }
}

export function filterPage(photoList, perPageString, pageValue) {
  var perPage = Number(perPageString);
  if (perPage > 0) {
    let minimum = 1 + perPage * (pageValue - 1);
    let maximum = perPage + perPage * (pageValue - 1);
    let photosToShow = photoList.slice(minimum - 1, maximum);
    return photosToShow;
  } else {
    return [];
  }
}

export function filterSort(
  photosToShow,
  sortdate,
  sortlikes,
  sortcomments,
  sorttags
) {
  if (!sortdate && !sortlikes && !sortcomments && !sorttags) {
    return photosToShow;
  } else {
    if (sortdate) {
      if (sortdate === 1) {
        photosToShow.sort(function(a, b) {
          return b.created_time - a.created_time;
        });
      } else {
        photosToShow.sort(function(a, b) {
          return a.created_time - b.created_time;
        });
      }
    }
    if (sortlikes) {
      if (sortlikes === 1) {
        photosToShow.sort(function(a, b) {
          return b.likes.count - a.likes.count;
        });
      } else {
        photosToShow.sort(function(a, b) {
          return a.likes.count - b.likes.count;
        });
      }
    }
    if (sortcomments) {
      if (sortcomments === 1) {
        photosToShow.sort(function(a, b) {
          return b.comments.count - a.comments.count;
        });
      } else {
        photosToShow.sort(function(a, b) {
          return a.comments.count - b.comments.count;
        });
      }
    }
    if (sorttags) {
      if (sorttags === 1) {
        photosToShow.sort(function(a, b) {
          return b.tags.length - a.tags.length;
        });
      } else {
        photosToShow.sort(function(a, b) {
          return a.tags.length - b.tags.length;
        });
      }
    }
    return photosToShow;
  }
}

export function filterText(photosToShow, searchValue) {
  if (searchValue === "") {
    return photosToShow;
  } else {
    let photoList = [];
    let toMatch = new RegExp(searchValue, "i");
    for (var i = 0; i < photosToShow.length; i++) {
      if (
        photosToShow[i].user.username.match(toMatch) ||
        photosToShow[i].caption.text.match(toMatch)
      ) {
        photoList.push(photosToShow[i]);
      }
    }
    return photoList;
  }
}

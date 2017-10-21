export function removeNonImages(photoList) {
  let photosToShow = [];
  for (var i = 0; i < photoList.data.length; i++) {
    if (photoList.data[i].type === "image") {
      photosToShow.push(photoList.data[i]);
    }
  }
  return photosToShow;
}

export function uniqueList(photoList, property) {
  let filters = [];
  for (var i = 0; i < photoList.length; i++) {
    if (filters.indexOf(photoList[i][property]) === -1) {
      filters.push(photoList[i][property]);
    }
  }
  return filters;
}

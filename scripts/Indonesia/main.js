import { returnLandmarkCollection } from "./landmarks/LandmarksData.js";
import { returnCityCollection } from "./cities/CitiesData.js";
import { returnCelebrityCollection } from "./celebrities/CelebrityData.js";
import { LandmarkHTML } from "./landmarks/Landmark.js";
import { ListObjects } from "../ListItems.js";

import { Celebrity } from "../ObjectHTML/Celebrity.js";
import { Landmark } from "../ObjectHTML/Landmark.js";
import { City } from "../ObjectHTML/City.js";
const landmarkArray = returnLandmarkCollection();

// add Landmarks to HTML
// ListObjects(".indonesia-landmarks", landmarkArray, Celebrity);

// grab object data
const celebrityData = returnCelebrityCollection();
const cityData = returnCityCollection();
const landmarkData = returnLandmarkCollection();

// query selector for celebrities
const celebrityContentElement = document.querySelector(
    ".indonesia-celebrities"
);
const cityContentElement = document.querySelector(".indonesia-cities");
const landmarkContentElement = document.querySelector(".indonesia-landmarks");
// add celbrites to html
for (let celeb of celebrityData) {
    celebrityContentElement.innerHTML += Celebrity(celeb);
}

// query selector for cities

for (let city of cityData) {
    cityContentElement.innerHTML += Landmark(city);
}

// add landmarks to HTML

for (let landmark of landmarkData) {
    landmarkContentElement.innerHTML += Celebrity(landmark);
}

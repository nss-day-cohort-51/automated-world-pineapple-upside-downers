import { returnLandmarkCollection } from "./landmarks/LandmarksData.js";
import { returnCityCollection } from "./cities/CitiesData.js";
import { returnCelebrityCollection } from "./celebrities/CelebrityData.js";

import { Celebrity } from "../ObjectHTML/Celebrity.js";
import { Landmark } from "../ObjectHTML/Landmark.js";
import { City } from "../ObjectHTML/City.js";
const landmarkArray = returnLandmarkCollection();


// grab object data
const celebrityData = returnCelebrityCollection();
const cityData = returnCityCollection();
const landmarkData = returnLandmarkCollection();

// find document objects to be filled in
const celebrityContentElement = document.querySelector(
    ".indonesia-celebrities"
);
const cityContentElement = document.querySelector(".indonesia-cities");
const landmarkContentElement = document.querySelector(".indonesia-landmarks");

// add each celebrity to DOM
for (let celeb of celebrityData) {
    celebrityContentElement.innerHTML += Celebrity(celeb);
}

// add each city to DOM
for (let city of cityData) {
    cityContentElement.innerHTML += City(city);
}

// add each landmark to DOM
for (let landmark of landmarkData) {
    landmarkContentElement.innerHTML += Landmark(landmark);
}

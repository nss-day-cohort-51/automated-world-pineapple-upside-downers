import { returnCelebrityCollection } from "./celebrities/CelebritiesData.js";
import { returnLandmarkCollection } from "../ireland/landmarks/LandmarksData.js";
import { returnCityCollection } from "../Indonesia/cities/CitiesData.js";

import { Celebrity } from "../ObjectHTML/Celebrity.js";
import { Landmark } from "../ObjectHTML/Landmark.js";
import { City } from "../ObjectHTML/City.js";


//Grab Data Object
const celebrityData = returnCelebrityCollection();
const landmarkData = returnLandmarkCollection();
const cityData = returnCityCollection();

const celebrityContentElement = document.querySelector(
    ".ireland-celebrities"
);
const landmarkContentElement = document.querySelector(".ireland-landmarks");

const cityContentElement = document.querySelector(".ireland-cities");

for (let celeb of celebrityData) {
    celebrityContentElement.innerHTML += Celebrity(celeb);
}

for (let landmark of landmarkData) {
    landmarkContentElement.innerHTML += Celebrity(landmark);
}

for (let city of cityData) {
    cityContentElement.innerHTML += City(city);
}
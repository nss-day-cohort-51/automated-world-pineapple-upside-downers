import { returnLandmarkCollection } from "./landmarks/LandmarksData.js";
import { LandmarkHTML } from "./landmarks/Landmark.js";
import { ListObjects } from "../ListItems.js";

import { Celebrity } from "../Ethiopia/celebrities/Celetrity.js";
import { getCelebrity } from "../Ethiopia/celebrities/CelebritiesData.js";
const landmarkArray = returnLandmarkCollection();

// add Landmarks to HTML
// ListObjects(".indonesia-landmarks", landmarkArray, Celebrity);

const celbrityData = getCelebrity();

const contentElement = document.querySelector(".ethiopia-landmarks");
// Clear out innerHTML and rewrite it

for (let celeb of celbrityData) {
    contentElement.innerHTML += Celebrity(celeb);
}

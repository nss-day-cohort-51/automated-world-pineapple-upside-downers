import { returnLandmarkCollection } from "./landmarks/LandmarksData.js";
import { LandmarkHTML } from "./landmarks/Landmark.js";
import { ListObjects } from "../ListItems.js";

const landmarkArray = returnLandmarkCollection();

// add Landmarks to HTML
ListObjects(".indonesia-landmarks", landmarkArray, LandmarkHTML);

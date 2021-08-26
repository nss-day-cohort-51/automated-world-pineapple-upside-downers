import { returnLandmarkCollection } from "./LandmarksData.js";
import { LandmarkHTML } from "./Landmark.js";

export const LandmarkList = () => {
    // Get a reference to the `<section class="fishList">` element
    // const contentElement = document.querySelector(".indonesia-landmark-list");
    const landmarkCollection = returnLandmarkCollection();

    // Add to the existing HTML in the content element
    let landmarksHTMLRepresentation = "";
    for (const landmark of landmarkCollection) {
        landmarksHTMLRepresentation += LandmarkHTML(landmark);
    }

    // contentElement.innerHTML += `${landmarksHTMLRepresentation}`;

    console.log(landmarksHTMLRepresentation);
};

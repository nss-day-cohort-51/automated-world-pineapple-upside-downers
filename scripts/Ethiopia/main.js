
import { getCelebrity } from "./celebrities/CelebritiesData.js"
import { landmarks } from "./landmarks/LandmarksData.js"
import { getcity } from "./cities/CitiesData.js"
import { Celebrity } from "../Ethiopia/celebrities/Celebrity.js"
import { Landmark } from "../ObjectHTML/Landmark.js"
import { City } from "../ObjectHTML/City.js"

const celebrityData = getCelebrity()
const LandmarkData = landmarks()
const cityData = getcity()


const celebrityContentElement = document.querySelector(".ethiopia-celebrities")
const landmarkContentElement = document.querySelector(".ethiopia-landmarks")
const cityContentElement = document.querySelector(".ethiopia-cities")


for (let celeb of celebrityData) {
    celebrityContentElement.innerHTML += Celebrity(celeb);
}


for (let landmark of LandmarkData) {
    landmarkContentElement.innerHTML += Landmark(landmark)
}

for (let city of cityData) {
    cityContentElement.innerHTML += City(city)
}
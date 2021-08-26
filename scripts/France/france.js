//LandMarks and TemplateLands imports
import { landmarks, templateLands } from "./landmarks/LandmarksData.js";


//Celebrities
import { celebrityPops,templatesOfCeleb } from "./celebrities/CelebritiesData.js";


import { citiesBff,templatecities } from "./cities/CitiesData.js";











//CELEBRITIES 

export function loopingInto()
{
const accessHTML = document.querySelector('.celebrities-France')

const allCelebrities = celebrityPops()

let responses = ""

for(const thisCelebrities of allCelebrities)
{
    responses += templatesOfCeleb(thisCelebrities);
}

accessHTML.innerHTML += responses;

}




//CITIES OF FRANCE

export function citiesFrance()
{
    const getCities = document.querySelector('.cities-France')

    const allTheCities = citiesBff()

    let assignMyCity = ""

    for(const citiesFranco of allTheCities)
    {
        assignMyCity += templatecities(citiesFranco)
    }

    getCities.innerHTML += assignMyCity
}




//LandMarks

export function landOfFrance() 
{
    const accessLands = document.querySelector('.lands-France')

    const allLands = landmarks()

    let noLandsString = ""

    for(const goodlands of allLands)
    {
        noLandsString += templateLands(goodlands)
    }

    accessLands.innerHTML +=noLandsString
}
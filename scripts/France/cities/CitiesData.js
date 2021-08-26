const cityCollection = [
    {
        name: "Paris",
        population: undefined,
        description: "Description here",
        externalLink: "example.html",
        image:"paris.jpg"
    },


    {
        name: "Leon France",
        population: undefined,
        description: "Description here",
        externalLink: "example.html",
        image:"leon.jpg"
    },



    {
        name: "Lyon France",
        population: undefined,
        description: "Description here",
        externalLink: "example.html",
        image:"lyon.jpg"
    },
];


export const citiesBff = () =>

{
    return cityCollection;
}


export const templatecities = (cityIlove) =>
{
   return `<div class="card"><a href="${cityIlove.externalLink}">
   <div><img class="card-image" src="scripts/France/imagesFrance/${cityIlove.image}" /></div>
   <h4 class="card-name">${cityIlove.name}</h4>
   <ul>
       <li class="card-details">Occupation: ${cityIlove.occopation}</li>
       <li class="card-details">${cityIlove.discripition}</li>        
   </ul>
</a>
</div>`;
}


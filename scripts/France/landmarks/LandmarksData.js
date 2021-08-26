const landmarkCollection = [
    {
        name: "Eiffel Tower",
        yearCreated: "15 March 1889",
        description: "Locally nicknamed La dame de fer (French for Iron Lady), it was constructed from 1887 to 1889 as the entrance to the 1889 World's Fair and was initially criticised by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world.[3] The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015.",

        externalLink: "<a href=https://en.wikipedia.org/wiki/Eiffel_Tower></a>",
        image: "around-the-eiffel-tower.jpg"
    },



    {
        name: "ARC France",
        yearCreated: undefined,
        description: "Description here",
        externalLink: "example.html",
        image:"arc.jpg"
    },


    {
        name: "Traveller",
        yearCreated: undefined,
        description: "Description here",
        externalLink: "example.html",
        image:"traveller.jpg"
    }
]



export const landmarks = () =>
{
    return landmarkCollection;
}

export const templateLands = (lan) =>
{
    
   return `<div class="card"><a href="${lan.externalLink}">
   <div><img class="card-image" src="/scripts/France/imagesFrance/${lan.image}" /></div>
   <h4 class="card-name">${lan.name}</h4>
   <ul>
       <li class="card-details">Occupation: ${lan.occopation}</li>
       <li class="card-details">${lan.discripition}</li>        
   </ul>
</a>
</div>`;
}

 
const landmarkCollection = [
    {
        name: "Eiffel Tower",
        yearCreated: "15 March 1889",
        description: "Locally nicknamed La dame de fer (French for Iron Lady), it was constructed from 1887 to 1889 as the entrance to the 1889 World's Fair and was initially criticised by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world.[3] The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015.",

        externalLink: "<a href=https://en.wikipedia.org/wiki/Eiffel_Tower></a>",
        image: "landMarks/around-the-eiffel-tower.jpg"
    },



    {
        name: "empty",
        yearCreated: undefined,
        description: "Description here",
        externalLink: "example.html",
        image:"arc.jpg"
    },


    {
        name: "empty",
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
    
   return `
    <div><img src="../France/imagesFrance/${lan.image}" /></div>
    <p>${lan.name}</p>
    <p>${lan.yearCreated}</p>
    <p>${lan.description}</p>
    <p>${lan.externalLink}</p>
    
    
    `
}

 
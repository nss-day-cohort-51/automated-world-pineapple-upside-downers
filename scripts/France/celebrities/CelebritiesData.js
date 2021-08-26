const celebrityCollection = [
    {
        name: "Maitre",
        occupation: "undefined",
        description: "Description here",
        externalLink: "example.html",
        image: "example.jpg",
    },
];

export const celebrityPops = () =>
{
    return celebrityCollection;
}


export const templatesOfCeleb = (cele) =>
{ 
  return  `<div>${cele.image}</div>
    <p>${cele.name}</p>
    <p>${cele.occupation}</p>
    <p>${cele.description}</p>
    <p>${cele.externalLink}</p>

    `
}




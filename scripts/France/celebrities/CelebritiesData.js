const celebrityCollection = [
    {
        name: "Omar",
        occupation: "Actor",
        description: "Description here",
        externalLink: "example.html",
        image: "Omar.jpeg",
    },

    {
        name: "Maitre Gims",
        occupation: "Singer",
        description: "Description here",
        externalLink: "example.html",
        image: "Maître_Gims_Cannes_2016.jpeg",
    },




    {
        name: "Eva",
        occupation: "Actress",
        description: "Description here",
        externalLink: "example.html",
        image: "eva.jpg",
    },
];

export const celebrityPops = () =>
{
    return celebrityCollection;
}


export const templatesOfCeleb = (cele) =>
{ 
  return  `<div class="card"><a href="${cele.externalLink}">
  <div><img class="card-image" src="scripts/France/imagesFrance/${cele.image}" /></div>
  <h4 class="card-name">${cele.name}</h4>
  <ul>
      <li class="card-details">Occupation: ${cele.occopation}</li>
      <li class="card-details">${cele.discripition}</li>        
  </ul>
</a>
</div>`;
}




const celebrityCollection = [
    {
        name: "Omar",
        occupation: "Actor",
        description: "Omar Sy is a French actor, best known in his homeland for his sketches with Fred Testot on the Service après-vente des émissions television show on Canal+",
        externalLink: "example.html",
        image: "Omar.jpeg",
    },

    {
        name: "Maitre Gims",
        occupation: "Singer",
        description: "Gandhi Bilel Djuna, better known by his stage name Maître Gims and more recently just Gims, is a Congolese-French singer-songwriter and rapper. He grew up in France and currently lives in France and Morocco.",
        externalLink: "https://en.wikipedia.org/wiki/Gims",
        image: "Maître_Gims_Cannes_2016.jpeg",
    },




    {
        name: "Eva",
        occupation: "Actress",
        description: "Eva Gaëlle Green is a French actress and model. The daughter of actress Marlène Jobert, she started her career in theatre before making her film debut in Bernardo Bertolucci's The Dreamers.",
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
  return  `<div class="card"><a href="${cele.externalLink}" target="_blank">
  <div><img class="card-image" src="scripts/France/automated-world-pineapple-upside-downers/imagesFrance/${cele.image}" /></div>
  <h4 class="card-name">${cele.name}</h4>
  <ul>
      <li class="card-details"><strong>Occupation</strong>: ${cele.occupation}</li>
      <li class="card-details">${cele.description}</li>        
  </ul>
</a>
</div>`;
}




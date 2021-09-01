const cityCollection = [
    {
        name: "Paris",
        population: "2,175,601",
        description:
            "Paris (French pronunciation: ​[paʁi] (About this soundlisten)) is the capital and most populous city of France, with an estimated population of 2,175,601 residents as of 2018, in an area.",
        externalLink: "https://en.wikipedia.org/wiki/Paris",
        image: "paris.jpg",
    },

    {
        name: "Leon France",
        population: "518,635",
        description:
            "Lyon or Lyons (UK: /ˈliːɒ̃/,[5][6] US: /liˈoʊn/,[7][8][c] French: [ljɔ̃] (About this soundlisten); Arpitan: Liyon, pronounced [ʎjɔ̃]) is the third-largest city and second-largest urban.",
        externalLink: "https://en.wikipedia.org/wiki/Lyon",
        image: "leon.jpg",
    },

    {
        name: "Lyon France",
        population: "518,635",
        description:
            "Lyon or Lyons (UK: /ˈliːɒ̃/,[5][6] US: /liˈoʊn/,[7][8][c] French: [ljɔ̃] (About this soundlisten); Arpitan: Liyon, pronounced [ʎjɔ̃]) is the third-largest city and second-largest.",
        externalLink: "https://en.wikipedia.org/wiki/Lyon",
        image: "lyon.jpg",
    },
];

export const citiesBff = () => {
    return cityCollection;
};

export const templatecities = (cityIlove) => {
    return `<div class="card"><a href="${cityIlove.externalLink}">
   <div><img class="card-image" src="scripts/France/automated-world-pineapple-upside-downers/imagesFrance/${cityIlove.image}" /></div>
   <h4 class="card-name">${cityIlove.name}</h4>
   <ul>
       <li class="card-details"><strong>Population</strong>: ${cityIlove.population}</li>
       <li class="card-details">${cityIlove.description}</li>        
   </ul>
</a>
</div>`;
};

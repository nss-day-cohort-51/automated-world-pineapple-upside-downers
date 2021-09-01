const landmarkCollection = [
    {
        name: "Eiffel Tower",
        yearCreated: "1889",
        description:
            "Locally nicknamed La dame de fer (French for Iron Lady), it was constructed from 1887 to 1889 as the entrance to the 1889 World's Fair.",

        externalLink: "<a href=https://en.wikipedia.org/wiki/Eiffel_Tower></a>",
        image: "arc.jpg",
    },

    {
        name: "ARC France",
        yearCreated: 1836,
        description:
            "The Arc de Triomphe de l'Étoile (UK: /ˌɑːrk də ˈtriːɒmf, - ˈtriːoʊmf/,[3][4] US: /- triːˈoʊmf/.",
        externalLink: "https://en.wikipedia.org/wiki/Arc_de_Triomphe",
        image: "arc.jpg",
    },

    {
        name: "Traveller",
        yearCreated: 1836,
        description:
            "The Arc de Triomphe de l'Étoile (UK: /ˌɑːrk də ˈtriːɒmf, - ˈtriːoʊmf/,[3][4] US: /- triːˈoʊmf/.",
        externalLink: "https://en.wikipedia.org/wiki/Arc_de_Triomphe",
        image: "arc.jpg",
    },
];

export const landmarks = () => {
    return landmarkCollection;
};

export const templateLands = (lan) => {
    return `<div class="card"><a href="${lan.externalLink}">
   <div><img class="card-image" src="/scripts/France/automated-world-pineapple-upside-downers/imagesFrance/${lan.image}" /></div>
   <h4 class="card-name">${lan.name}</h4>
   <ul>
       <li class="card-details"><strong>Year Created</strong>: ${lan.yearCreated}</li>
       <li class="card-details">${lan.description}</li>        
   </ul>
</a>
</div>`;
};

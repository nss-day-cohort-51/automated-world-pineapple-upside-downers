const cityCollection = [
    {
        name: "blank",
        population: undefined,
        description: "Description here",
        externalLink: "example.html",
        image:"paris.jpg"
    }
];


export const citiesBff = () =>

{
    return cityCollection;
}


export const templatecities = (cityIlove) =>
{
   return `
   
    <div><img src="/France/imagesFrance/${cityIlove.image}" /></div>
    <div>${cityIlove.name}</div>
    <div>${cityIlove.population}</div>
    <div>${cityIlove.description}</div>
    <div>${cityIlove.externalLink}</div>
    
    `
}


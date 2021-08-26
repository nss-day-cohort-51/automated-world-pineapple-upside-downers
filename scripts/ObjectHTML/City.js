export const City = (cityObj) => {
    return `<div class="card"><a href="${cityObj.externalLink}">
    <div><img class="card-image" src="images/${cityObj.image}" /></div>
    <h4 class="card-name">${cityObj.name}</h4>
    <ul>
        <li class="card-details">Population: ${cityObj.population}</li>
        <li class="card-details">${cityObj.description}</li>        
    </ul>
</a>
</div>`;
};

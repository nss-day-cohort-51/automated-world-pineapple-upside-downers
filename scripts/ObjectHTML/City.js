export const City = (cityObj) => {
    return `<div class="card"><a href="${cityObj.externalLink}">
    <div><img class="card-image" src="images/${cityObj.image}" /></div>
    <h4 class="card-name">${cityObj.name}</h4>
    <ul>
        <li class="card-details">Occupation: ${cityObj.occopation}</li>
        <li class="card-details">${cityObj.discripition}</li>        
    </ul>
</a>
</div>`;
};

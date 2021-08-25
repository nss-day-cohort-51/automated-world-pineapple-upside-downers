export const Celebrity = (celebObj) => {
    return `<div class="card"><a href="${celebObj.externalLink}">
    <div><img class="card-image" src="images/${celebObj.image}" /></div>
    <h4 class="card-name">${celebObj.name}</h4>
    <ul>
        <li class="card-details">Occupation: ${celebObj.occopation}</li>
        <li class="card-details">${celebObj.discripition}</li>        
    </ul>
</a>
</div>`;
};

// convert the Celebrity object into HTML
export const celebrity = (celebObj) => {
    return `<div class="card"><a href="${celebObj.externalLink}" target="_blank">
    <div><img class="card-image" src="images/${celebObj.image}" /></div>
    <h4 class="card-name">${celebObj.name}</h4>
    <ul>
        <li class="card-details">Occupation: ${celebObj.occupation}</li>
        <li class="card-details">${celebObj.description}</li>        
    </ul>
</a>
</div>`;
};

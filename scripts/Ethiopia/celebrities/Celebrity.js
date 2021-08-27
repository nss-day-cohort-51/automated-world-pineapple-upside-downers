export const Celebrity = (celebObj) => {

    return `<div class="card"><a href="${celebObj.externalLink}" target="_blank">

    <div><img class="card-image" src="images/${celebObj.image}" /></div>
    <h4 class="card-name">${celebObj.name}</h4>
    <ul>
        <li class="card-details"><strong> Occupation: </strong>${celebObj.occupation}</li>
        <li class="card-details">${celebObj.description}</li>        
    </ul>
</a>
</div>`;
};

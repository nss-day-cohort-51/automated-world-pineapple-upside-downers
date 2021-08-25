export const Celebrity = (celebObj) => {
    return `<div class="card"><a href="${celebObj.externalLink}" class="celeb-card">
    <div><img class="celeb-image" src="images/${celebObj.image}" /></div>
    <h4 class="celeb-name">${celebObj.name}</h4>
    <ul>
        <li class="celeb-details">Occupation: ${celebObj.occopation}</li>
        <li class="celeb-details">${celebObj.discribition} inches</li>        
    </ul>
</a></div>`;
};

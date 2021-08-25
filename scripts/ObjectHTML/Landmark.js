export const Landmark = (landmarkbObj) => {
    return `<div class="card"><a href="${landmarkbObj.externalLink}">
    <div><img class="card-image" src="images/${landmarkbObj.image}" /></div>
    <h4 class="card-name">${landmarkbObj.name}</h4>
    <ul>
        <li class="card-details">Occupation: ${landmarkbObj.occopation}</li>
        <li class="card-details">${landmarkbObj.discripition}</li>        
    </ul>
</a>
</div>`;
};

export const ListObjects = (
    classSelector,
    objectArray,
    convertToHTMLFunction
) => {
    const contentElement = document.querySelector(classSelector);

    // TODO pass in array of objects into the function

    // Add to the existing HTML in the content element
    let HTMLinsert = "";
    for (const object of objectArray) {
        HTMLinsert += convertToHTMLFunction(object);
    }

    // contentElement.innerHTML += `${landmarksHTMLRepresentation}`;

    console.log(HTMLinsert);
};

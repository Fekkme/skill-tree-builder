// Define a function to handle click event
function handleClick(event) {

    var clickedDivID = event.target.id;
    var newParentDivID = getNewParentDivID(clickedDivID);

    // Show below div
    var BellowParentDiv = document.getElementById(newParentDivID);
    var showDiv = BellowParentDiv.getElementsByClassName("flex-item").namedItem(clickedDivID)
    showDiv.style = "show"

}

// Get the div element by its ID
const divElement1 = document.getElementById('skill-1');
const divElement2 = document.getElementById('skill-2');
const divElement3 = document.getElementById('skill-3');

divElement1.addEventListener('click', handleClick);
divElement2.addEventListener('click', handleClick);
divElement3.addEventListener('click', handleClick);


function getNewParentDivID(childDivID){

    var div = document.getElementById(childDivID);
    var newParentDivId = div.parentNode;

    var levelNr = parseInt(newParentDivId.id.substring(6));
    levelNr++

    return 'level-' + levelNr

}

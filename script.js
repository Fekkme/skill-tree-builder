// Define a function to handle click event
function handleClick(event) {
    console.log('Div clicked');
    // You can add your logic here for what happens when the div is clicked
    var div = document.getElementById("skill-1");
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    div.style.backgroundColor = randomColor;
}

// Get the div element by its ID
const divElement = document.getElementById('skill-1');
const divElement2 = document.getElementById('skill-2');

alert("change1")
// Check if the div element exists
if (divElement) {
    // Add event listener for click event
    divElement.addEventListener('click', handleClick);
} else {
    console.error('Div element not found!');
}

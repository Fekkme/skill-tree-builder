// Define a function to handle click event
function handleClick(event, const divElement) {
    console.log('Div clicked');
    // You can add your logic here for what happens when the div is clicked
    var div = document.getElementById(divElement);
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    div.style.backgroundColor = randomColor;
}

alert("change1")

// Get the div element by its ID
const divElement1 = document.getElementById('skill-1');
const divElement2 = document.getElementById('skill-2');
const divElement3 = document.getElementById('skill-3');

divElement1.addEventListener('click', handleClick(divElement1));
divElement2.addEventListener('click', handleClick(divElement2));
divElement3.addEventListener('click', handleClick(divElement3));


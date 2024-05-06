// Define a function to handle click event
function handleClick(event) {
    console.log('Div clicked!');
    // You can add your logic here for what happens when the div is clicked
}

// Get the div element by its ID
const divElement = document.getElementById('myDiv');

// Check if the div element exists
if (divElement) {
    // Add event listener for click event
    divElement.addEventListener('click', handleClick);
} else {
    console.error('Div element not found!');
}

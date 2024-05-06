// Define a class for the div element
class DivElement {
    constructor(private element: HTMLElement) {
        // Add event listener for click event
        this.element.addEventListener('click', this.handleClick.bind(this));
    }

    // Method to handle click event
    private handleClick(event: MouseEvent) {
        console.log('Div clicked!');
        // You can add your logic here for what happens when the div is clicked
    }
}

// Get the div element by its ID
const divElement = document.getElementById('skill-1');

// Check if the div element exists
if (divElement) {
    // Create an instance of the DivElement class
    const myDivElement = new DivElement(divElement);
} else {
    console.error('Div element not found!');
}

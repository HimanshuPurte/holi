// script.js

// Example JavaScript code to add interactivity
document.addEventListener('DOMContentLoaded', function () {
    // Code to execute after the DOM is fully loaded
    console.log('DOM is ready.');

    // Example: Change background color when the button is clicked
    const button = document.getElementById('changeColorButton');
    const body = document.body;

    button.addEventListener('click', function () {
        body.style.backgroundColor = getRandomColor();
    });

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

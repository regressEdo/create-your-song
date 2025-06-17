// Wait for the entire page to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    const colorButton = document.getElementById('colorButton');
    const body = document.body;

    const colors = ['#f0f0f0', '#e0f7fa', '#ffebee', '#f3e5f5'];
    let currentColorIndex = 0;

    colorButton.addEventListener('click', () => {
        // Cycle to the next color in the array
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        body.style.backgroundColor = colors[currentColorIndex];
    });

});
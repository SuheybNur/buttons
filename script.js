const originalColor = window.getComputedStyle(document.body).backgroundColor;
let previousColor = originalColor;

const colorButtons = document.querySelectorAll('.color-btn');
const undoButton = document.getElementById('undo-btn');
const addButton = document.getElementById('add-btn');

// Function to change background color
function changeBackgroundColor(color) {
    previousColor = document.body.style.backgroundColor || originalColor;
    document.body.style.backgroundColor = color;
}

// Event listeners for color buttons
colorButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from bubbling up to the body
        changeBackgroundColor(button.style.backgroundColor);
    });
});

// Event listener for clicking outside of buttons
document.body.addEventListener('click', () => {
    document.body.style.backgroundColor = originalColor;
});

// Undo button functionality
undoButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent event from bubbling up to the body
    document.body.style.backgroundColor = previousColor;
});

// Add new color button
addButton.addEventListener('click', () => {
    const newButton = document.createElement('button');
    const colors = ['green', 'yellow', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    newButton.className = 'color-btn';
    newButton.style.backgroundColor = randomColor;
    newButton.textContent = randomColor.charAt(0).toUpperCase() + randomColor.slice(1);
    
    newButton.addEventListener('click', (event) => {
        event.stopPropagation();
        changeBackgroundColor(newButton.style.backgroundColor);
    });

    document.querySelector('.button-container').appendChild(newButton);
});

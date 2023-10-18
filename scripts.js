// Constants for query selector
const customNumberInput = document.getElementById('customNumber');
const custColorButton = document.querySelector('.custColor');
const randColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const myStudentId = document.getElementById('200541828');
const images = document.getElementById('images');

// Store image sources in an array
const imageSources = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

// Event listener for "Change custom color" button
custColorButton.addEventListener('click', changeCustomColor);

// Event listener for "Change random color" button
randColorButton.addEventListener('click', changeRandomColor);

// Event listener for the select element
imageSelect.addEventListener('change', changeImage);

// Function to change background color based on user input and display student ID
function changeCustomColor() {
    const userInput = customNumberInput.value;
    myStudentId.textContent = `200541828: ${userInput}`;

    // Change background color based on conditions
    if (userInput < 0 || userInput > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (userInput >= 0 && userInput <= 20) {
        document.body.style.backgroundColor = 'green';
    } else if (userInput > 20 && userInput <= 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (userInput > 40 && userInput <= 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (userInput > 60 && userInput <= 80) {
        document.body.style.backgroundColor = 'purple';
    } else if (userInput > 80 && userInput <= 100) {
        document.body.style.backgroundColor = 'yellow';
    }
}

// Function to change background color based on a random number
function changeRandomColor() {
    const randomInput = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomInput;
    changeCustomColor();
}

// Function to generate options for the select element
function addList() {
    for (let i = 0; i < imageSources.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Image ${i + 1}`;
        imageSelect.appendChild(option);
    }
}

// Initialize the options in the select element
addList();

// Function to change the displayed image based on the select option
function changeImage() {
    const selectedIndex = imageSelect.value;
    if (selectedIndex >= 0 && selectedIndex < imageSources.length) {
        const selectedImageSrc = imageSources[selectedIndex];
        images.src = selectedImageSrc;
    }
}

// script.js

  // Get a reference to the .dizzy-gillespie element
const loaderElement = document.querySelector('.dizzy-gillespie');

// Function to show the loader
function showLoader() {
  loaderElement.style.display = 'block';
}

// Function to hide the loader and show text and image
function hideLoader() {
  loaderElement.style.display = 'none';

  // Create a container element
  const container = document.createElement('div');
  container.classList.add('content-container');

  // Create a new text element
  const textElement = document.createElement('div');
  textElement.classList.add = 'two-line-text';
  textElement.innerHTML = "Loading Complete! <br> By. Imas Masrurroh 04022201044"

  // Create a new image element
  const imageElement = document.createElement('img');
  imageElement.src = 'gambar.jpg'; // Replace with the actual image URL
  
  // Append the text and image to the container
  container.appendChild(textElement);
  container.appendChild(imageElement);

  // Append the container to the document body
  document.body.appendChild(container);
}

// Simulate a loading delay (you can replace this with your actual loading process)
function simulateLoading() {
  showLoader(); // Show the loader
  setTimeout(function () {
    hideLoader(); // Hide the loader after a delay (e.g., 3000 milliseconds or 3 seconds)
  }, 3000);
}

// Call the simulateLoading function to start the loader
simulateLoading();

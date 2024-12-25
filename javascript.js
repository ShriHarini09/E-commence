const carousel = document.querySelector('.advertisement');  // The container holding the images
const images = document.querySelectorAll('.ad-item'); // All the images inside the carousel
const totalImages = images.length;
let index = 0;  // To track the current image index

// Function to move the carousel to the next image
function moveToNextImage() {
    index = (index + 1) % totalImages; // Move to the next image, looping back to the first image when we reach the last
    carousel.style.transition = 'transform 0.5s ease-in-out'; // Apply smooth transition
    carousel.style.transform = `translateX(-${index * 100}%)`; // Move the carousel to the next image
}

// Set an interval to change the image every 3 seconds
setInterval(moveToNextImage, 2000);

/*const carousel = document.querySelector('.advertisement');
const images = document.querySelectorAll('.ad-item');
const totalImages = images.length;
let index = 0;

// Clone the first image and append it to the end of the carousel for seamless looping
const firstImage = images[0].cloneNode(true);
carousel.appendChild(firstImage);

// Function to move the carousel to the next image
function moveToNextImage() {
    index = (index + 1) % totalImages; // Move to the next image, looping back to the first image when we reach the last
    carousel.style.transition = 'transform 0.5s ease-in-out'; // Apply smooth transition
    carousel.style.transform = `translateX(-${index * 100}%)`; // Move the carousel to the next image

    // When the last image is reached, reset the carousel position back to the first image (without animation)
    if (index === totalImages) {
        setTimeout(() => {
            carousel.style.transition = 'none'; // Disable animation
            carousel.style.transform = 'translateX(0)'; // Reset to first image
            index = 0; // Reset index
        }, 500); // Wait for the transition duration to complete before resetting
    }
}

// Set an interval to change the image every 3 seconds
setInterval(moveToNextImage, 3000);
*/
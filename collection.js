// collection.js
// JavaScript for the image carousel
const images = document.querySelectorAll('.zoomable-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselControls = document.querySelector('.carousel-controls');
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    // Show the carousel controls when an image is displayed
    carouselControls.style.display = 'block';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Function to show the lightbox when an image is clicked
function showLightbox(imageSrc) {
    const lightbox = document.querySelector('.lightbox');
    const zoomedImage = document.getElementById('zoomed-image');

    zoomedImage.src = imageSrc;

    const lightboxZoomInBtn = document.getElementById('lightboxZoomInBtn');
    const lightboxZoomOutBtn = document.getElementById('lightboxZoomOutBtn');

    lightbox.style.display = 'block';

    // Attach click event listeners to the lightbox zoom buttons
    lightboxZoomInBtn.addEventListener('click', zoomIn);
    lightboxZoomOutBtn.addEventListener('click', zoomOut);
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'none';

    // Hide the carousel controls when the lightbox is closed
    carouselControls.style.display = 'none';
}

// Initially display the first image
showImage(currentIndex);

// Define an array to store cart items (you can use an object to store more item details)
const cartItems = [];

// Function to add the selected item to the cart
function addToCart() {
    // Get the details of the selected item
    const selectedItem = {
        name: "Bosnian Lilium Dukserica", // Update with the actual product name
        price: 79.90, // Update with the actual product price
        image: "product1.jpeg", // Update with the actual product image URL
    };

    // Add the item to the cart array
    cartItems.push(selectedItem);

    // Update the cart link text to show the number of items in the cart
    const cartLink = document.querySelector('.cart-link');
    cartLink.textContent = `Cart (${cartItems.length})`;

    // Optionally, you can store the cartItems array in localStorage for persistence
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

const zoomInBtn = document.getElementById('lightboxZoomInBtn');
const zoomOutBtn = document.getElementById('lightboxZoomOutBtn');
const zoomedImage = document.getElementById('zoomed-image'); // Updated to match the lightbox image

let zoomLevel = 1; // Initial zoom level

// Function to zoom in
function zoomIn() {
    zoomLevel += 0.1;
    zoomedImage.style.transform = `scale(${zoomLevel})`;
}

// Function to zoom out
function zoomOut() {
    zoomLevel -= 0.1;
    if (zoomLevel < 0.1) {
        zoomLevel = 0.1; // Limit minimum zoom level
    }
    zoomedImage.style.transform = `scale(${zoomLevel})`;
}

// Attach click event listeners to the lightbox zoom buttons
zoomInBtn.addEventListener('click', zoomIn);
zoomOutBtn.addEventListener('click', zoomOut);

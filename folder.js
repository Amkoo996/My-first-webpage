document.addEventListener('DOMContentLoaded', function () {
    // Existing code for folder functionality
    const folders = document.querySelectorAll('.folder');
    folders.forEach(folder => {
        folder.addEventListener('click', function () {
            const subfolder = this.querySelector('.subfolder');
            this.classList.toggle('open');
            subfolder.style.display = subfolder.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Existing code for opening images in a lightbox/modal
    const zoomableImages = document.querySelectorAll('.zoomable-image');
    const zoomedImage = document.getElementById('zoomed-image');
    const lightbox = document.querySelector('.lightbox');
    const closeButton = document.querySelector('.close-button');

    zoomableImages.forEach((image) => {
        image.addEventListener('click', () => {
            zoomedImage.src = image.src;
            lightbox.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Existing code for searching
    const searchButton = document.querySelector('.search-form button');
    const searchInput = document.querySelector('.search-form input[type="text"]');

    searchButton.addEventListener('click', function (e) {
        e.preventDefault();
        const searchTerm = searchInput.value;
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
        }
    });

    // Scroll event listener for zooming in and out
    let currentZoomLevel = 1;
    zoomedImage.addEventListener('wheel', function (e) {
        e.preventDefault();
        const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1; // Reverse scroll direction for zooming
        currentZoomLevel *= zoomFactor;
        currentZoomLevel = Math.min(Math.max(currentZoomLevel, 1), 3); // Limit zoom level
        zoomedImage.style.transform = `scale(${currentZoomLevel})`;
    });

    // Close the lightbox/modal when clicking outside of the image
    lightbox.addEventListener('click', function (e) {
        if (e.target === this) {
            lightbox.style.display = 'none';
        }
    });

    // Close the lightbox/modal when pressing the Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
        }
    });

    // Additional JavaScript code for other functionalities

    // Your login form code goes here (as shown in the previous response)
});



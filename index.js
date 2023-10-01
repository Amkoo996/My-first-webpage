// Function to toggle user data display
function toggleUserData() {
    const userData = document.getElementById('userData');
    userData.classList.toggle('show');
}

// Function to handle user logout
function logout() {
    // Add your logout logic here, such as clearing user session or cookies
    // For now, we'll just reload the page
    window.location.reload();
}

// Function to perform the search
function search() {
    // Get the search query from the input field
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();

    // Perform the search logic here
    // For demonstration purposes, let's assume you have a list of items to search through

    // Example list of items (you can replace this with your data)
    const items = [
        'Product 1',
        'Product 2',
        'Product 3',
        'Product 4',
        'Product 5',
    ];

    // Filter items that match the search query
    const searchResults = items.filter(item => item.toLowerCase().includes(searchQuery));

    // Display the search results or perform the desired action
    if (searchResults.length > 0) {
        // Display the results, e.g., update a list of matching items
        displaySearchResults(searchResults);
    } else {
        // Handle no results found, e.g., display a message
        displayNoResults();
    }
}

// Function to display search results
function displaySearchResults(results) {
    // Replace or update the content to display the search results
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.textContent = result;
        searchResultsContainer.appendChild(resultItem);
    });
}

// Function to display a message when no results are found
function displayNoResults() {
    // Handle displaying a message when no results are found
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = 'No results found.';
}

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Show the navbar when the menu icon is clicked
    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("hidden");
    });
});

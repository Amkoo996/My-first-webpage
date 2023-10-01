// Initialize an empty cart array
const cart = [];
// Add click event listener to "Dodaj u korpu" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productId = this.closest('.product-item').getAttribute('data-product-id');

        // Find the product data based on the productId (you can load product data from an array or an API)
        const productData = findProductById(productId);

        if (productData) {
            // Add the product to the cart
            cart.push(productData);
            alert(`Proizvod "${productData.name}" je dodan u korpu.`);
            // You can update the cart UI or perform other actions here
        }
    });
});

// Example product data (you can replace this with your actual product data)
const products = [
    { id: '1', name: 'Bosnian Lilium Dukserica', price: 79.90 },
    { id: '2', name: 'Bosnian Lilium Majica', price: 29.90 },
    // Add more product data as needed
];

// Function to find product data by ID
function findProductById(productId) {
    return products.find(product => product.id === productId);
}

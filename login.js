document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulate a simple client-side check (not secure, for demonstration only)
        if (username === 'ahmed' && password === 'ahmed') {
            // Redirect to a protected page upon successful login
            window.location.href = 'protected.html';
        } else {
            // Display an error message for unsuccessful login
            errorMessage.textContent = 'Invalid username or password. Please try again.';
        }
    });
});

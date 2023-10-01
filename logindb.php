<?php
$servername = "localhost"; // Change this to your database server name
$username = "root"; // Change this to your database username
$password = "password"; // Change this to your database password
$dbname = "mydatabase"; // Change this to your database name

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the username and password from the form submission
$username = $_POST['username'];
$password = $_POST['password'];

// Query the database to check if the username and password are valid
$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

// Check if the query was successful and if a row was returned
if ($result->num_rows > 0) {
    // The username and password are valid, so redirect the user to the home page
    header("Location: home.php");
} else {
    // The username and password are not valid, so show an error message
    echo "Invalid username or password.";
}

// Close the database connection
$conn->close();
?>

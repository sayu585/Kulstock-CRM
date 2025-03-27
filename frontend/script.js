// Ensure the script is loaded
console.log("script.js is loaded correctly");

// Function to handle login
function login() {
    console.log("Login function triggered");
    // Add login logic here
}

// Function to handle registration
function register() {
    console.log("Register function triggered");
    // Add registration logic here
}

// Attach functions to global scope (optional, depending on how you're calling them)
window.login = login;
window.register = register;

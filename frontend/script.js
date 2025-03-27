function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill in all fields");
        return;
    }

    console.log("Logging in with:", email, password);
    alert("Login successful (Dummy function)");
}

function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;
    let role = document.getElementById("role").value;

    if (!name || !email || !password) {
        alert("Please fill in all fields");
        return;
    }

    console.log("Registering:", name, email, password, role);
    alert("Registration successful (Dummy function)");
}

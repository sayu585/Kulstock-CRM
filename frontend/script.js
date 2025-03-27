document.addEventListener("DOMContentLoaded", function () {
    // Simulated user data for authentication
    let users = [
        { email: "admin@kulstock.com", password: "admin123", role: "admin" },
        { email: "client@kulstock.com", password: "client123", role: "client" }
    ];

    // Login functionality
    document.getElementById("login-form")?.addEventListener("submit", function (event) {
        event.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let user = users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem("userRole", user.role);
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert("Invalid credentials!");
        }
    });

    // Logout functionality
    document.getElementById("logout-btn")?.addEventListener("click", function () {
        localStorage.removeItem("userRole");
        localStorage.removeItem("isLoggedIn");
        window.location.href = "index.html"; // Redirect to login page
    });

    // Show or hide elements based on user role
    function checkUserRole() {
        let role = localStorage.getItem("userRole");
        let isLoggedIn = localStorage.getItem("isLoggedIn");

        if (!isLoggedIn) {
            window.location.href = "index.html"; // Redirect if not logged in
            return;
        }

        if (role === "admin") {
            document.querySelectorAll(".admin-only").forEach(el => el.style.display = "block");
        } else {
            document.querySelectorAll(".admin-only").forEach(el => el.style.display = "none");
        }
    }

    checkUserRole();

    // Add recommendation functionality
    document.getElementById("add-recommendation")?.addEventListener("click", function () {
        let recommendationText = document.getElementById("recommendation-input").value;
        if (recommendationText.trim() === "") {
            alert("Please enter a recommendation.");
            return;
        }

        let recommendationList = document.getElementById("recommendation-list");
        let listItem = document.createElement("li");
        listItem.innerHTML = `
            ${recommendationText}
            <button class="delete-btn admin-only">Delete</button>
        `;

        // Delete button functionality
        listItem.querySelector(".delete-btn").addEventListener("click", function () {
            listItem.remove();
        });

        recommendationList.appendChild(listItem);
        document.getElementById("recommendation-input").value = "";
        checkUserRole(); // Apply role-based visibility
    });
});

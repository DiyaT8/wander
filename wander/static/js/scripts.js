// Redirect to Login Page
function redirectToLogin() {
    window.location.href = "login.html";
}

// Handle Login Form Submission
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
            
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            if (email === "admin@example.com" && password === "password123") {
                alert("Login successful! Redirecting...");
                window.location.href = "index.html";
            } else {
                alert("Invalid credentials. Please try again.");
            }
        });
    }
});

// Google Login Function (Placeholder)
function googleLogin() {
    alert("Google Login feature coming soon!");
}

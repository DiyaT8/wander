document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-btn");
    
    loginButton.addEventListener("click", function () {
        alert("Login functionality will be implemented soon!");
    });
    
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href") === "#") {
                event.preventDefault();
                alert("This feature is under development.");
            }
        });
    });

    // Moving background effect
    const backgroundImage = document.querySelector(".background-image");
    let position = 0;
    function moveBackground() {
        position -= 1;
        backgroundImage.style.transform = `translateX(${position}px)`;
        if (position < -backgroundImage.width) {
            position = window.innerWidth;
        }
        requestAnimationFrame(moveBackground);
    }
    moveBackground();
});

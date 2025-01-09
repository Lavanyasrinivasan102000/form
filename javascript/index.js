document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevents form submission

            let username = document.getElementById("username").value.trim();
            let password = document.getElementById("password").value.trim();

            if (username === "" || password === "") {
                alert("Please fill in all fields.");
                return;
            }

            // If all fields are filled, simulate successful login
            alert("Login successful!");
            
        });
    } else {
        console.error("Login form not found.");
    }
});

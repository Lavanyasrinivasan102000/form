document.addEventListener("DOMContentLoaded", function () {
    let forgotForm = document.getElementById("forgot-password-form");

    if (forgotForm) {
        forgotForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevents form submission

            // Correctly get the email input by ID
            let email = document.getElementById("forgot-email").value.trim();

            if (email === "") {
                alert("Please enter your email.");
                return;
            }

            // Email format validation
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Password reset link sent to your email.");
        });
    } else {
        console.error("Forgot password form not found.");
    }
});

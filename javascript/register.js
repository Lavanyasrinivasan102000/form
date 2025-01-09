document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('registration-form');
    
    if (!form) {
        console.error("Error: The form with ID 'registration-form' was not found.");
        return; // Stop execution if form is not found
    }

    form.addEventListener('submit', function(event) {
        var fullName = document.getElementsByName('FullName')[0]?.value.trim();
        var userName = document.getElementsByName('UserName')[0]?.value.trim();
        var email = document.getElementsByName('email')[0]?.value.trim();
        var password = document.getElementsByName('password')[0]?.value.trim();

        if (!fullName || !userName || !email || !password) {
            alert('Please fill in all fields before submitting!');
            event.preventDefault();
            return;
        }

        alert('Form submitted successfully!'); // For testing purposes
    });
});

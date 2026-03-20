function validateForm() {

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var mobile = document.getElementById("mobile").value.trim();

    // Clear errors
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Please enter your name";
        isValid = false;
    }

    // Email validation
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerHTML = "Enter valid email";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Minimum 6 characters required";
        isValid = false;
    }

    // Mobile validation
    if (isNaN(mobile) || mobile.length !== 10) {
        document.getElementById("mobileError").innerHTML = "Enter valid 10-digit number";
        isValid = false;
    }

    // Show success popup
    if (isValid) {
        document.getElementById("successBox").style.display = "flex";
    }

    return false; // prevent actual submit
}

// Continue button function
function continueForm() {
    document.getElementById("successBox").style.display = "none";
    document.querySelector("form").reset();
}
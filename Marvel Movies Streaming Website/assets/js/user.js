// Signup form validation
document.getElementById("signupBtn").addEventListener("click", function () {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Name validation
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Email validation (simple pattern check)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    // Password validation (at least 8 characters)
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // If validations pass, show a success message and redirect to the previous page
    alert("Signup successful!");
    window.history.back(); // This returns to the previous page
});

// Login form validation
document.getElementById("loginBtn").addEventListener("click", function () {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Email validation (simple pattern check)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    // Password validation (at least 8 characters)
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // If validations pass, show a success message and redirect to the previous page
    alert("Login successful!");
    window.history.back(); // This returns to the previous page
});

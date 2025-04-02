document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById("contactName").value;
    const phone = document.getElementById("contactPhone").value;
    const address = document.getElementById("contactAddress").value;
    const message = document.getElementById("contactMessage").value;

    // Basic validation for name
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Phone validation: exactly 10 digits, starting with a digit between 6 and 9
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number starting with a digit between 6 and 9.");
        return;
    }

    // Basic validation for address
    if (address === "") {
        alert("Please enter your address.");
        return;
    }

    // Basic validation for message
    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    alert("Message sent successfully!");

    // Optionally, clear form after submission
    document.getElementById("contactForm").reset();
});

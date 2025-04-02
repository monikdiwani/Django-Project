// Function to validate email format using a regular expression
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}

// Store the current page URL when the signup modal is opened
document.querySelectorAll('[data-target="#signupModal"]').forEach(btn => {
  btn.addEventListener('click', function() {
    sessionStorage.setItem('lastPage', window.location.href);  // Store current URL in sessionStorage
  });
});

// Handle sign-up form submission
document.getElementById('signupBtn').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Email validation
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Password validation: minimum 8 characters
  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  // Check if all fields are filled
  if (name && email && password.length >= 8) {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Close the modal after successful submission
    $('#signupModal').modal('hide');
    alert('Sign Up successful!');

    // Redirect to the last page after successful signup
    $('#signupModal').on('hidden.bs.modal', function () {
      const lastPage = sessionStorage.getItem('lastPage');
      if (lastPage) {
        window.location.href = lastPage;  // Redirect to the stored page
      }
    });
  } else {
    alert('Please fill in all the fields.');
  }
});

// Clear form fields when the modal is closed
document.getElementById('closeSignupBtn').addEventListener('click', function() {
  document.getElementById('signupForm').reset();
});

$('#signupModal').on('hidden.bs.modal', function () {
  document.getElementById('signupForm').reset();
});

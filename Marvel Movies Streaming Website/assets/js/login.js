// Function to validate email format using a regular expression
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}

// Handle login form submission
document.getElementById('loginBtn').addEventListener('click', function() {
  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  // Check if all fields are filled
  if (loginEmail && loginPassword) {
    console.log('Email:', loginEmail);
    console.log('Password:', loginPassword);

    // Close the modal after successful login
    $('#loginModal').modal('hide');
    alert('Login successful!');
  } else {
    alert('Please fill in all the fields.');
  }
});

// Clear form fields when the modal is closed
document.getElementById('closeLoginBtn').addEventListener('click', function() {
  document.getElementById('loginForm').reset();
});

$('#loginModal').on('hidden.bs.modal', function () {
  document.getElementById('loginForm').reset();
});

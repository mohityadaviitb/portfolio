const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Check if the name field is not empty
  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    nameInput.focus();
    return;
  }

  // Check if the email field is not empty and is a valid email format
  if (emailInput.value.trim() === '') {
    alert('Please enter your email');
    emailInput.focus();
    return;
  } else if (!isValidEmail(emailInput.value)) {
    alert('Please enter a valid email');
    emailInput.focus();
    return;
  }

  // Check if the message field is not empty
  if (messageInput.value.trim() === '') {
    alert('Please enter your message');
    messageInput.focus();
    return;
  }

  // Submit the form if all validations pass
  form.submit();
});

// Helper function to validate email format
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

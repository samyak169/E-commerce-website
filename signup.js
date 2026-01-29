function togglePassword() {
  const passwordInput = document.getElementById('password');
  const showText = document.querySelector('.show-password');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showText.textContent = '🙈 Hide Password';
  } else {
    passwordInput.type = 'password';
    showText.textContent = '👁 Show Password';
  }
}

function toggleSignupPassword() {
  const passwordInput = document.getElementById('signup-password');
  const showText = passwordInput.nextElementSibling;
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showText.textContent = '🙈 Hide Password';
  } else {
    passwordInput.type = 'password';
    showText.textContent = '👁 Show Password';
  }
}

function handleSignIn(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simulated login
  if (email === 'user@example.com' && password === 'fashion123') {
    alert('Signed in successfully!');
  } else {
    alert('Invalid email or password.');
  }
}

function handleSignUp(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Simulated registration
  if (name && email && password) {
    alert(`Welcome to FashionFi, ${name}! 🎉`);
    // Redirect or logic here
  } else {
    alert('Please fill out all fields.');
  }
}

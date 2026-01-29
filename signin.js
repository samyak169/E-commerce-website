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
  
  function handleSignIn(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simulated login check
    if (email === 'user@example.com' && password === 'fashion123') {
      alert('Signed in successfully!');
      // Redirect or logic here
    } else {
      alert('Invalid email or password.');
    }
  }
  
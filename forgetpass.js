function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.getElementById('forgot-email').value;
  
    if (email) {
      // Simulate sending reset email
      alert(`Password reset link sent to ${email}`);
      // Redirect to sign-in or show confirmation UI if needed
    } else {
      alert("Please enter a valid email address.");
    }
  }
  
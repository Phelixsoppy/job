

  const signUpEmailPass = () => {
    const FirstName = document.getElementById('Fname').value;
    const LastName = document.getElementById('Lname').value;
    const email = document.getElementById('gmail').value;
    const password = document.getElementById('pass').value;
    const phone = document.getElementById('phone').value;

    // Validate fields
    if (FirstName == '' || LastName == '' || email == '' || password == '' || phone == '') {
      alert('Please fill all fields');
      return;
    }

    // Email validation
    if (!email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    // Password validation
    if (password.length < 6) {
      alert('Password should be at least 6 characters');
      return;
    }

    // Create user data object
    const userData = {
      FirstName,
      LastName,
      email,
      password,
      phone,
      createdAt: new Date().toISOString()
    };

    // Store in Realtime Database
    const usersRef = ref(database, 'signupUsers');
    push(usersRef, userData)
      .then(() => {
        alert('Registration successful!');
        window.location.href = 'login.html';
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Registration failed: ' + error.message);
      });
  };
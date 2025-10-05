// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { firebaseConfig } from "./config.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const signUpWithAuth = () => {
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

  // Create user with Firebase Authentication
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      
      // Update user profile
      return updateProfile(user, {
        displayName: `${FirstName} ${LastName}`
      }).then(() => {
        // Store additional user data in Realtime Database
        const userData = {
          FirstName,
          LastName,
          email,
          phone,
          uid: user.uid,
          createdAt: new Date().toISOString()
        };
        
        return set(ref(database, `users/${user.uid}`), userData);
      });
    })
    .then(() => {
      alert('Registration successful!');
      window.location.href = 'login.html';
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Registration failed: ' + error.message);
    });
};

// Export function to global scope
window.signUpWithAuth = signUpWithAuth;
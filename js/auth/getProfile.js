// Check if the user is logged in and retrieve the username from your authentication system
const isLoggedIn = true; // Replace with your actual login check
const username = "John Doe"; // Replace with the retrieved username

// Get references to the HTML elements
const usernameDisplay = document.getElementById("usernameDisplay");
const loginLink = document.getElementById("loginLink");

if (isLoggedIn) {
  // If the user is logged in, display the username and hide the login link
  usernameDisplay.textContent = username;
  loginLink.style.display = "none";
} else {
  // If the user is not logged in, hide the username display
  usernameDisplay.style.display = "none";
}

document.getElementById("login").addEventListener("click", signIn);

function getInputVal(id) {
  return document.getElementById(id).value;
}

async function signIn() {
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;

  const url = "http://localhost:4000/loginuser"; // Replace with your backend URL

  const data = {
    email: email,
    password: password,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // Include credentials in the request
    body: JSON.stringify(data), // Convert data to JSON string
    // secretKey: 'thisissecretkeyforauth'
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server
      alert(data.message);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      alert("Error:", error);
    });
  //   return response.json();

  // console.log(response.body);
}

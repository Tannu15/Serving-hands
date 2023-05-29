document.getElementById("register").addEventListener("click", register);

function getInputVal(id) {
  return document.getElementById(id).value;
}
async function register() {
  var password = getInputVal("password");
  var email = getInputVal("email");
  var organization = getInputVal("org");
  var name = getInputVal("name");
  var phone = getInputVal("number");
  var location = getInputVal("location");

  const url = "http://localhost:4000/register"; // Replace with your backend URL

  const data = {
    name: name,
    organization: organization,
    email: email,
    password: password,
    phone: phone,
    location: location,
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
      alert("Registered successful!");
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      // console.error("Error:", error);
      alert("error:", error);
    });
  //   return response.json();

  // console.log(response.body);
}

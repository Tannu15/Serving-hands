const options = {
  method: "GET",
  credentials: "include", // Include credentials in the request
};
const url = "http://localhost:4000/getallusers"; // Replace with your backend URL
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    // Handle the response from the server

    const usersTable = document.getElementById("usersTable");
    const tbody = usersTable.querySelector("tbody");
    const users = data.users;
    generateUserRows(users);
  })
  .catch((error) => {
    // Handle any errors that occurred during the request
    console.error("Error:", error);
  });

// Function to generate the table rows from the user data
function generateUserRows(users) {
  const tbody = document.createElement("tbody");

  users.forEach((user) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    row.appendChild(emailCell);

    const orgCell = document.createElement("td");
    orgCell.textContent = user.organization;
    row.appendChild(orgCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = user.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
  });

  usersTable.appendChild(tbody);
}

document.getElementById("request").addEventListener("click", Request);

function getInputVal(id) {
    return document.getElementById(id).value;
}
async function Request() {
    console.log('called');
    var email = getInputVal("email");
    var description = getInputVal("description");
    var name = getInputVal("name");
    var phone = getInputVal("number");
    var location = getInputVal("location");

    const url = "http://localhost:4000/request"; // Replace with your backend URL

    const data = {
        name: name,
        description: description,
        email: email,
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
            alert("Request successful!");
        })
        .catch((error) => {
            // Handle any errors that occurred during the request
            console.error("Error:", error);
            alert("Error:", error);
        });
    //   return response.json();

    // console.log(response.body);
}

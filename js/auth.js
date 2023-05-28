
document.getElementById("login").addEventListener("click", signIn);
function getInputVal(id) {
    return document.getElementById(id).value;
}

async function signIn() {
    // var password = document.getElementById('password').value;
    // var email = document.getElementById('email').value;


    // console.log(email);
    // console.log(password);



    const url = 'https://code-backend.onrender.com/loginuser'; // Replace with your backend URL

    const data = {
        // Your request data here
        email: "voidprogrammer@gmail.com",
        password: "void@123"
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // Include credentials in the request
        body: JSON.stringify(data), // Convert data to JSON string
        // secretKey: 'thisissecretkeyforauth'
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            console.log(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
        });
    //   return response.json(); 

    // console.log(response.body);
}
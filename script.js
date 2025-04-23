// validation of username and password
const validUsername = "user";
const validPassword = "pass123";

function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById("uname");
    const password = document.getElementById("psw");
    // Get the element with ID 'username-error'
    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");

    let isValid = true;

    // Reset error messages
    usernameError.style.display = "none";
    passwordError.style.display = "none";

    // validate username and show error if it doesn't match
    if (username.value !== validUsername) {
        usernameError.textContent = "Invalid Username";
        usernameError.style.display = "block";
        isValid = false;
    }

    if (password.value !== validPassword) {
        passwordError.textContent = "Invalid Password";
        passwordError.style.display = "block";
        isValid = false;
    }
    //Redirect if input is valid
    if (isValid) {
        window.location.href = "./pages/FEE(project).html";
    }
}












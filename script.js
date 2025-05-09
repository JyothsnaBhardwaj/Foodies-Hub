//validate username
const validUsername = "user";
//validate password
const validPassword = "pass123";

// login form validation
function validateLogin(event) {
    event.preventDefault();

    // get username input
    const username = document.getElementById("uname");
    // get password input
    const password = document.getElementById("psw");
    // get username error display element
    const usernameError = document.getElementById("username-error");
    // get password error display element
    const passwordError = document.getElementById("password-error");

    let isValid = true;
    // reset username
    usernameError.style.display = "none";
    // reset password
    passwordError.style.display = "none";
    //check if username is correct
    if (username.value !== validUsername) {
        usernameError.textContent = "Invalid Username"; 
        usernameError.style.display = "block";
        isValid = false;
    }

    //check if password is correct
    if (password.value !== validPassword) {
        passwordError.textContent = "Invalid Password"; 
        passwordError.style.display = "block";
        isValid = false;
    }
    
    // proceed if input is valid
    if (isValid) {
        // redirect to fee project page
        window.location.href = "./pages/FEE(project).html"; 
    }
    else{
        alert("Please check your username and pass.");
    }
}












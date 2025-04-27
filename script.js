//validate username and password

//validate username
const validUsername = "user";//.
//validate password
const validPassword = "pass123";//.

// login form validation
function validateLogin(event) {//.
    event.preventDefault();//.

    const username = document.getElementById("uname");//.
    const password = document.getElementById("psw");//.
    const usernameError = document.getElementById("username-error");//.
    const passwordError = document.getElementById("password-error");//.

    //validation flag
    let isValid = true;//.

    // Reset error messages
    // reset username
    usernameError.style.display = "none";//.
    // reset password
    passwordError.style.display = "none";//.
    //.
    //check if username is correct
    if (username.value !== validUsername) {//.
        usernameError.textContent = "Invalid Username"; //.
        usernameError.style.display = "block";//.
        isValid = false;//.
    }//.

    if (password.value !== validPassword) {//.
        passwordError.textContent = "Invalid Password"; //.
        passwordError.style.display = "block";//.
        isValid = false;//.
    }//.

    if (isValid) {//.
        window.location.href = "./pages/FEE(project).html";//.
    }//.
}//.












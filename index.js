function togglePassword() {
    let passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

function startLoadingSequence() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let loading = document.getElementById("loading");
    let loginButton = document.getElementById("login-button");
    let usernameError = document.getElementById("username-error");
    let passwordError = document.getElementById("password-error");

    usernameError.style.display = "none";
    passwordError.style.display = "none";

    if (username.length < 4) {
        usernameError.style.display = "block";
        return;
    }
    if (password.length < 6) {
        passwordError.style.display = "block";
        return;
    }

    loginButton.disabled = true;
    loading.style.display = "block";

    setTimeout(() => {
        if (username === "freddyl" && password === "freddyl999") {
            window.location.href = "pakyu.html";
        } else {
            alert("Invalid Username or Password");
            loading.style.display = "none";
            loginButton.disabled = false;
        }
    }, 5000);
}

document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        startLoadingSequence();
    }
});

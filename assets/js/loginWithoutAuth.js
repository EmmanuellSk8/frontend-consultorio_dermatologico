function iniciarSesion() {
    var user = document.getElementById("correoid").value
    var psw = document.getElementById("txtPassword").value

    if (user === "root" && psw === "root") {
        location.href = "homepage.html";
    } else {
        alert("el correo debería ser root\nla contraseña debería ser root");
    }
}


function togglePasswordVisibility() {
    var passwordField = document.getElementById("txtPassword");

    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function togglePassworddVisibility() {
    var passwordField = document.getElementById("txtPasswordd");

    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

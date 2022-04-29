// GUARDAMOS NODOS DEL DOM
let name = document.getElementById("name")
console.log(name)
let email = document.getElementById("email")
console.log(email)
let password1 = document.getElementById("password1")
console.log(password1)
let password2 = document.getElementById("password2")
console.log(password2)
let btn = document.querySelector(".btn")
console.log(btn)

const users = [];

btn.addEventListener("click", function(e) {
    e.preventDefault()
    const data = {
        nombre: name.value,
        email: email.value,
        pass1: password1.value,
        pass2: password2.value,
    }
    users.push(data);
    console.log(users);
    guardarDatos()
    validarDatos()
    validarCorreo()
    validarPass()
})

function guardarDatos() {
    localStorage.setItem('usuarios', JSON.stringify(users));
}

function validarDatos() {
    if (name.value === "" || email.value === "" || password1.value === "" || password2.value === "") {
        console.log("Por favor, rellénalo todo bitch!");
    } else {
        console.log("De PM, sigue así");
    }
}

let msg = document.querySelector("#msg");

function validarCorreo() {
    if (/^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/.test(email.value) == false) {
        msg.innerHTML = "<b>Escribe bien correo</b>";
    } else {
        msg.innerHTML = "<b>Correo correcto</b>";
    }
    setTimeout(() => {
        msg.innerHTML = "";
    }, 3000);
}

function validarPass() {
    if (password1.value === password2.value) {
        console.log("Clave correcta");
    } else {
        console.log("Contraseñas diferentes");
    }
}
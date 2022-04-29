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
    contrastarPass()
    validarPass()
    redirigir()

})

let correct = document.getElementById("correct")
console.log(correct)

function redirigir() {
    if (name.value !== "" && email.value !== "" && password1.value !== "" && password2.value !== "" && /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/.test(email.value) == true && /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(password1.value) == true && password1.value === password2.value) {
        setTimeout(() => {
            correct.innerHTML = "<h2>Usuario correcto</h2>"
        }, 4000);
        window.setTimeout(() => {
            window.location.href = "/MOSTRAR USUARIOS.HTML"
        }, 6000);

    }
}

function guardarDatos() {
    localStorage.setItem('usuarios', JSON.stringify(users));
}
let generalCheck = document.getElementById("generalCheck")

function validarDatos() {
    if (name.value === "" || email.value === "" || password1.value === "" || password2.value === "") {

        generalCheck.innerHTML = "<b>Por favor, rellénalo todo bitch!</b>";
    } else {
        generalCheck.innerHTML = "<b>De PM, sigue así</b>";

    }
    setTimeout(() => {
        generalCheck.innerHTML = "";
    }, 3000);

}

let msg = document.querySelector("#msg");




function validarCorreo() {
    msg.className = "d-grid alert alert-primary"

    if (/^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/.test(email.value) == false) {
        msg.innerHTML = "<b>Escribe bien correo</b>";
    } else {
        msg.innerHTML = "<b>Correo correcto</b>";
    }
    setTimeout(() => {  
        msg.className = "d-none alert alert-primary"
        msg.innerHTML = "";
    }, 3000);
}
let msgPass = document.getElementById("msgPass")

function validarPass() {
    msgPass.className = "d-grid alert alert-primary"
    if (/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(password1.value) == false) {
        msgPass.innerHTML = "<b>La contraseña debe tener al menos una letra, un número y más de 6 carácteres</b>";
    } else {
        msgPass.innerHTML = "<b>Buena contraseña crack</b>";
    }
    setTimeout(() => {
        msgPass.className = "d-none alert alert-primary"
        msgPass.innerHTML = "";
    }, 3000);
}
let llave = false;

function contrastarPass() {
    if (password1.value === password2.value) {
        console.log("Clave correcta");
        llave = true
    } else {
        console.log("Contraseñas diferentes");
    }

}
let form = document.getElementById("form")
console.log(form)
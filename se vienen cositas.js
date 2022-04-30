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

let users = JSON.parse(localStorage.getItem('usuarios')) || []; //SUPER IMPORTANTE PARA MANTENER LOS DATOS DEL LOCAL STORAGE ENTRE PÁGINAS

// if (localStorage.usarios == undefined){
//     users = JSON.parse(localStorage.getItem('usuarios'));
//     console.log('Hay algo en el localStorage')               //OTRA VERSIÓN
// }   else{
//     console.log('No hay nada en el localStorage')
// }
// console.log(localStorage.usuarios)

btn.addEventListener("click", function(e) {
    e.preventDefault()

    guardarDatos()
    validarDatos()
    validarCorreo()
    contrastarPass()
    validarPass()
    redirigir()
    console.log(users)
})

let spinner=document.getElementById('spinner');

function redirigir() {
    if (name.value !== "" && email.value !== "" && password1.value !== "" && password2.value !== "" && /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/.test(email.value) == true && /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(password1.value) == true && password1.value === password2.value) {

        setTimeout(() => {
            spinner.className = "spinner-border text-primary"
            spinner.innerHTML=""
        },   1000);
        setTimeout(() => {
            generalCheck.className = "d-grid alert alert-success text-center"
            generalCheck.innerHTML = "<h2>Usuario correcto</h2>"
        }, 4000);
        window.setTimeout(() => {
            window.location.href = "/MOSTRAR USUARIOS.HTML"
        }, 6000);

    }
}

function guardarDatos() {
    if (name.value !== "" && email.value !== "" && password1.value !== "" && password2.value !== "" && /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/.test(email.value) == true && /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(password1.value) == true && password1.value === password2.value) {
        const data = {
            nombre: name.value,
            email: email.value,
            pass1: password1.value,
            pass2: password2.value,
        }
        users.push(data);
        localStorage.setItem('usuarios', JSON.stringify(users));
    }

}

let generalCheck = document.getElementById("generalCheck")
let correct = document.getElementById("correct")

function validarDatos() {

    if (name.value === "" || email.value === "" || password1.value === "" || password2.value === "") {
        generalCheck.className = "d-grid alert alert-danger d-flex align-items-center"
        generalCheck.innerHTML = "<b>Por favor, rellénalo todo bitch!</b>";
    } else {



    }
    setTimeout(() => {
        generalCheck.className = "d-none alert alert-danger d-flex align-items-center"
        generalCheck.innerHTML = "";
    }, 3000);

}

let msg = document.querySelector("#msg");




function validarCorreo() {
    msg.className = "d-grid alert alert-primary"

    if (/^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/.test(email.value) == false) {
        msg.className = "d-grid alert alert-danger d-flex align-items-center"
        msg.innerHTML = "<b>Escribe bien correo</b>";
    } else {
        msg.className = "d-grid alert alert-primary"
        msg.innerHTML = "<b>Correo correcto</b>";
    }
    setTimeout(() => {
        msg.className = "d-none alert alert-primary"
        msg.innerHTML = "";
    }, 3000);
}
let msgPass = document.getElementById("msgPass")

function validarPass() {

    if (/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(password1.value) == false) {
        msgPass.className = "d-grid alert alert-danger d-flex align-items-center"
        msgPass.innerHTML = "<b>La contraseña debe tener al menos una letra, un número y más de 6 carácteres</b>";
    } else {
        msgPass.className = "d-grid alert alert-primary"
        msgPass.innerHTML = "<b>Contraseña cumple con el patrón</b>";
    }
    setTimeout(() => {
        msgPass.className = "d-none alert alert-primary"
        msgPass.innerHTML = "";
    }, 3000);
}
let llave = false;
let msgContrast = document.getElementById("msgContrast")

function contrastarPass() {
    if (password1.value !== password2.value) {
        msgContrast.className = "d-grid alert alert-danger d-flex align-items-center"
        msgContrast.innerHTML = "<b>Contraseñas diferentes</b>";



    }
    setTimeout(() => {
        msgContrast.className = "d-none alert alert-primary"
        msgContrast.innerHTML = "";
    }, 3000);

}
// GUARDAMOS EN VARIABLES NODOS DEL DOM PARA UTILIZAR DENTRO DE LAS FUNCIONES

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

let msgContrast = document.getElementById("msgContrast")

let spinner = document.getElementById('spinner');

let generalCheck = document.getElementById("generalCheck")

let msg = document.querySelector("#msg");

let msgPass = document.getElementById("msgPass")


// ***VARIABLE PARA MANTENER EL LOCALSTORAGE ENTRE PÁGINAS***

let users = JSON.parse(localStorage.getItem('usuarios')) || []; //SUPER IMPORTANTE PARA MANTENER LOS DATOS DEL LOCALSTORAGE ENTRE PÁGINAS

// if (localStorage.usarios == undefined){
//     users = JSON.parse(localStorage.getItem('usuarios'));
//     console.log('Hay algo en el localStorage')               //VERSIÓN EXTENDIDA DE LA MISMA SOLUCIÓN, AQUÍ SE VEN LAS CONDICIONES A CUMPLIR
// }   else{
//     console.log('No hay nada en el localStorage')
// }


//CREAMOS UN EVENTO AL PULSAR EL BOTÓN QUE DESENCADENARÁ UNA SERIE DE FUNCIONES

btn.addEventListener("click", function(e) {
    e.preventDefault()
    guardarDatos()
    validarDatos()
    validarCorreo()
    validarPass()
    contrastarPass()
    redirigir()
})

//FUNCIÓN CREADA CON CONDICIÓN PARA QUE ÚNICAMENTE GUARDE EN LOCALSTORAGE LOS CAMPOS INTRODUCIDOS CORRECTAMENTE
function guardarDatos() {
    if (name.value !== "" && email.value !== "" && password1.value !== "" && password2.value !== "" && /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/.test(email.value) == true && /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(password1.value) == true && password1.value === password2.value) {
        const data = {
            nombre: name.value,
            email: email.value,
            pass1: password1.value,
            pass2: password2.value,
        }
        users.push(data); // *IMPORTANTE METER EL PUSH DENTRO DE LA CONDICIÓN PARA EVITAR QUE LOS CAMPOS INCORRECTOS SE GUARDEN EN EL ARRAY*
        localStorage.setItem('usuarios', JSON.stringify(users));
    }

}

//* FUNCIÓN CREADA PARA DETECTAR CAMPOS VACÍOS
function validarDatos() {

    if (name.value === "" || email.value === "" || password1.value === "" || password2.value === "") {
        generalCheck.className = "d-grid alert alert-danger d-flex align-items-center" //Clase creada dinámicamente para aparecer solo si se 
        generalCheck.innerHTML = "<b>Por favor, rellénalo todo bitch!</b>"; //cumple la condición
    }
    setTimeout(() => {
        generalCheck.className = "d-none" //Cuenta atrás para que desaparezca la alerta        
    }, 3000);

}

// FUNCIÓN CREADA PARA INTRODUCIR CORREO SEGÚN CARACTERES ESPECÍFICOS (EXPRESIÓN REGULAR)
function validarCorreo() {


    if (/^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/.test(email.value) == false) {
        msg.className = "d-grid alert alert-danger d-flex align-items-center"
        msg.innerHTML = "<b>Escribe bien correo</b>";
    } else {
        msg.className = "d-grid alert alert-primary"
        msg.innerHTML = "<b>Correo correcto</b>";
    }
    setTimeout(() => {
        msg.className = "d-none"
    }, 3000);
}

//FUNCIÓN CREADA PARA INTRODUCIR CONTRASEÑA SEGÚN CARACTERES ESPECÍFICOS (EXPRESIÓN REGULAR)
function validarPass() {

    if (/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(password1.value) == false) {
        msgPass.className = "d-grid alert alert-danger d-flex align-items-center"
        msgPass.innerHTML = "<b>La contraseña debe tener al menos una letra, un número y más de 6 carácteres</b>";
    } else {
        msgPass.className = "d-grid alert alert-primary"
        msgPass.innerHTML = "<b>Contraseña cumple con el patrón</b>";
    }
    setTimeout(() => {
        msgPass.className = "d-none"
    }, 3000);
}

//FUNCIÓN CREADA PARA QUE AMBAS CLAVES SEAN IDÉNTICAS
function contrastarPass() {
    if (password1.value !== password2.value) {
        msgContrast.className = "d-grid alert alert-danger d-flex align-items-center"
        msgContrast.innerHTML = "<b>Contraseñas diferentes</b>";



    }
    setTimeout(() => {
        msgContrast.className = "d-none"
    }, 3000);

}

// FUNCIÓN CREADA PARA HACER QUE, SI TODAS LAS CONDICIONES ANTERIORES SE CUMPLAN, REDIRIJA A LA OTRA PÁGINA
function redirigir() {
    if (name.value !== "" && email.value !== "" && password1.value !== "" && password2.value !== "" && /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/.test(email.value) == true && /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(password1.value) == true && password1.value === password2.value) {

        setTimeout(() => {
            spinner.className = "spinner-border text-primary"
            spinner.innerHTML = "" //Dejamos el texto "Loading" en el HTML para eliminarlo desde Javascript (por probar y ver que sabemos)              
        }, 1000);

        setTimeout(() => {
            generalCheck.className = "d-grid alert alert-success text-center" // Este es el único apartado que hacemos al reves:
            generalCheck.innerHTML = "<h2>Usuario correcto</h2>" // En vez de cuando pasen 4 segundos se cambie a
        }, 4000); // "d-none" (como las anteriores), hacemos que cuando pasen esos 4 
        // segundos se cambie a "d-grid". Aquí no hace falta porner el none de nuevo porque ya va a redirigir a la otra página


        window.setTimeout(() => { // A los 6 segundos redirige a la otra página
            window.location.href = "/MOSTRAR USUARIOS.HTML"
        }, 6000);

    }
}
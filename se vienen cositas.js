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
        nombre:name.value,
        email:email.value,
        pass1:password1.value,
        pass2:password2.value,
    } 
    users.push(data);
    console.log(users);
    guardarDatos()
})

function guardarDatos(){
    localStorage.setItem('usuarios', JSON.stringify(users));
}




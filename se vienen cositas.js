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

btn.addEventListener("click", function(e) {
    e.preventDefault()
})
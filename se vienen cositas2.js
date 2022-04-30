let container = document.getElementById("pruebaPintada");
console.log(container)

pintarDatos()




function pintarDatos() {
    let usersback = JSON.parse(localStorage.getItem('usuarios'));

    function getRandom(array) {
        return array[Math.floor(Math.random() * array.length)]
    }
    const imgRandom = ["Assets/RANDOM/camello.jpg", "Assets/RANDOM/conejo.jpg", "Assets/RANDOM/mono.jpg", "Assets/RANDOM/perrito.jpg", "Assets/RANDOM/perro.jpg", "Assets/RANDOM/gatito.jpg"];

    console.log(getRandom(imgRandom))

    for (const usuario of usersback) {
        container.innerHTML += `<div class="d-flex card" style="width: 18rem;">
        <img src= ${getRandom(imgRandom)} alt="...">
        <div class="card-body">
            <h5 class="card-title">${usuario.nombre}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium enim sapiente quae. In laboriosam numquam maiores magnam minima delectus non, accusamus enim. Excepturi nam dolor sit obcaecati at eius reiciendis.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${usuario.email}</li>


        </ul>

    </div>
                                
                                `

    }
    
}

function guardarDatos() {
    // if (name.value !== "" && email.value !== "" && password1.value !== "" && password2.value !== "" && /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/.test(email.value) == true && /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(password1.value) == true && password1.value === password2.value) {
        
        localStorage.setItem('usuarios', JSON.stringify(users));
    //}
}

guardarDatos()
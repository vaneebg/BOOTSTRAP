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
        container.innerHTML += ` 
        <div class="col">
            <div class="card" style="width:15em">
                
                <div class="card-body">
                <img src=${getRandom(imgRandom)} class="card-img-top "  alt="...">
                    <h5 class="card-title text-center">${usuario.nombre}</h5>
                    <p class="card-text text-center">${usuario.email}</p>
                </div>
            </div>
        </div>
     `

    }

}
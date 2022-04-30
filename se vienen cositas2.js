//CREAMOS LA VARIABLE PARA SELECCIONAR EL NODO DONDE PINTAREMOS LAS CARDS

let container = document.getElementById("pruebaPintada");


//CREAMOS LA FUNCION PARA PINTAR LOS DATOS 
function pintarDatos() {
    let usersback = JSON.parse(localStorage.getItem('usuarios'));       //Traemos de vuelta desde el local los datos del LocalStorage

    function getRandom(array) {
        return array[Math.floor(Math.random() * array.length)]          //Creamos un método para que las imágenes aparezcan al azar
    }
    const imgRandom = ["Assets/RANDOM/camello.jpg", "Assets/RANDOM/conejo.jpg", "Assets/RANDOM/mono.jpg", "Assets/RANDOM/perrito.jpg", "Assets/RANDOM/perro.jpg", "Assets/RANDOM/gatito.jpg"];                            //Array de las imágenes

    for (const usuario of usersback) {                                  //Creamos iteración para ir pintando una a una conforme itera en la 
                                                                        //variable que contiene el LocalStorage de vuelta ("JSON.parse").
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
    }                                                                    //Gracias al innerHTML podemos crear las cards dinámicamente
}

pintarDatos()
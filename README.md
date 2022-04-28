<h1 align="center">BOOTSTRAP<project-name></h1>

<p align="center">

<project-description>

## Proyecto de Bootstrap

Proyecto de investigación de Boostrap con el objetivo de desarrollar nuevas habilidades de investigación y trabajo en equipo.

Las fases de la investigación han sido 3: Una primera fase basada en la investigación de la herramienta Bootstrap. Una segunda fase que ha sido la implementación práctica aprendida en la documentación aplicada a formularios y validación. Y por último una tercera fase correspondiente a la presentación del proyecto.

A continuación describiremos más detalladamente cada una de las fases comentadas.

<h2 align="center"><b>FASE 1 -- Inverstigación</b><phase-one></h2>

Para adquiir la documentación sobre Bootstrap, hemos utilizado una aplicación llamada "Zeal" que agrupa todas las documentaciones sobre herramientas basadas en programación. En concreto hemos adquirido la documentación de la versión Bootstrap 5.

Las cuestiones sobre las que hemos tenido que investigar son las siguientes:

•	**¿Qué es Bootstrap?¿Para qué sirve?**

Originalmente creado por Twitter para realizar sitios web de mobile first y diseño responsive con jsDelivr que es un CDN público gratuito para proyectos de código abierto.
Bootstrap provee un framework de fácil empleo; contiene estilos ya predefinidos y componentes interactivos permitiendo a los desarrolladores crear páginas web y aplicaciones que hacen que la página web sea atractiva, funcionalmente potente, accesibilidad fuera de lo normal. 

•	**¿Por qué usar Bootstrap?**

El hecho de tener estilos predefinidos y componentes interactivos hace que se reduzca el tiempo de estructurar uno por uno todos los elementos del HTML consiguiendo resultados igual de buenos o superiores. Además su simplicidad de interfaz hace que sea intuitivo para el usuario.

•	**Características de Bootstrap**
- _MARKUP ESTRUCTURADO:_ Su estilo y diseño pueden aplicarse a una amplia gama de estructuras de marcado.
- _COMPONENTES INTERACTIVOS:_ Los componentes interactivos de Bootstrap, como por ejemplo los menús desplegables, están diseñados para funcionar con tecnología táctil, con el ratón y con el teclado.

•	**Ventajas y desventajas de usar bootstrap**
- _VENTAJAS_: 
    - Ahorro de tiempo y esfuerzo al utilizar plantillas y clases de diseño predefinidas.
    - Accesibilidad: Se puede crear y modificar contenido para los screen readers, como por ejemplo añadir información adicional para usuarios con problemas de visión.
    - Diseño responsive: se pueden crear webs adaptables a diferentes dispositivos y resoluciones de pantalla sin ningún cambio en el marcado de forma automática.
    - Diseño consistente: todos los componentes de bootstrap comparten las mismas plantillas de diseño y estilo a través de una biblioteca central.
    - Compatibilidad con navegadores: ha sido creado pensando en los navegadores modernos : Chrome, Safari, Firefox.
    - Código abierto.
- _DESVENTAJAS_:
    - Se recomienda trabajar con Bootstrap desde el inicio de un proyecto, ya que si quieres incluir el framework en un trabajo ya iniciado algunos estilos podrían “romperse”. 
     - Debes adaptar tu diseño a un grid de 12 columnas, que se modifican según el dispositivo ya que Bootstrap por defecto te trae anchos, márgenes y altos de línea, y realizar cambios específicos.
     - Dado que los componentes de Bootstrap están diseñados a propósito para ser bastante genéricos, los autores pueden necesitar incluir más funciones y atributos ARIA, así como el comportamiento de JavaScript, para transmitir con mayor precisión la naturaleza y la funcionalidad.
     - El color predefinido de algunos elementos pueden dar lugar a contraste insuficientes según los estándares recogidos en WCAG: text color contrast.
     - En los navegadores/entornos que permiten al usuario especificar su preferencia por el movimiento reducido, la mayoría de los efectos de transición CSS de Bootstrap (por ejemplo, cuando se abre o cierra un diálogo modal, o la animación de deslizamiento en los carruseles) se desactivarán, y las animaciones significativas (como los spinners) se ralentizarán.

   •	**Como instalar o implementar bootstrap en mi proyecto**

   _PASO1_ Crear un archivo básico HTML:
    Abre tu editor de código favorito y crea un nuevo archivo HTML. Empieza con una ventana vacía y escribe el siguiente código y guárdalo en tu escritorio.
    
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Basic HTML File</title>
    </head>
    <body>
    <h1>Hello, world!</h1>
    </body>
    </html>
    ```

    _PASO2_ Introducir las plantillas Bootstrap en el archivo HTML

    Para convertir este archivo HTML plano en una plantilla de Bootstrap, basta con incluir los archivos CSS y JS de Bootstrap utilizando sus enlaces CDN. Además, debes incluir los archivos JavaScript al final de la página, justo antes de la etiqueta de cierre </body> para mejorar el rendimiento de tus páginas web.

    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Basic Bootstrap Template</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
    <h1>Hello, world!</h1>
    <!-- Bootstrap JS Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
    </html>
    ```

•	**¿Se puede implementar responsive con Bootstrap? Si es asi podrías explicar como funciona y poner un ejemplo**
Los estilos de Bootstrap están construidos para ser responsive, un enfoque que a menudo se conoce como mobile-first. Este enfoque trata de reducir las sobrecargas de CSS empujándote a añadir estilos a medida que la ventana gráfica se hace más grande.
_Cómo funciona_: Anchura mínima que comienza a aplicarse en un punto de corte específico y se extienden a los puntos de corte superiores. _Por ejemplo,_ un .d-none se aplica desde min-width: 0 hasta el infinito. Por otro lado, un .d-md-none se aplica desde el punto de ruptura medio en adelante.

•	**¿Qué es un componente de bootstrap?Pon un ejemplo**
Bootstrap nos da la posiblidad de utilizar diferentes componentes que no son más que pedazos de código ya programados que podemos insertar en nuestros proyectos, por ejemplo: menús de navegación, carrousels y tablas de precios, entre otros.

•	**¿Hay muchos tipos de diseños en Bootstrap? Si los hay, explícalos**
Existen dos tipos de diseños:

_FLUID-LAYOUT_: utiliza la clase bootstrap.container-fluid para el diseño. Este diseño utiliza valores proporcionales, comunidades de medida para un bloque de contenido, imágenes o cualquier otro elemento. El diseño fluido cambia continuamente de tamaño a medida que cambia el ancho de su navegador en cualquier cantidad, sin dejar ningún espacio vacio adicional a sus lados.

_DISEÑO FIJO_: utiliza la clase bootstrap.container para el diseño. El diseño fijo tiene valores de ancho de pixel específicos que cambia su valor de ancho con la ayuda de consulta de medios (mediaquerys). El diseño fijo cambia de tamaño en trozos en varios anchos determinados a medida que se especifíca los valores de los píxeles.

•	**¿Cuáles son los diferentes tipos de botones en bootstrap? Pon ejemplos.**

- *Tipos de botones en bootstrap:*
```
Ejemplo de los 9 tipos de botones:

<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
```
---

- *Tipos de grupos de botones:*

_BASIC-EXAMPLE_: Envuelve una serie de botones con .btn en .btn-group.

```
Ejemplo:

<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
```

Estas clases también pueden añadirse a grupos de enlaces, como alternativa a los componentes de navegación .nav.

---

_MIXED-STYLES_: Mezcla de diferentes estilos de botones.
```
Ejemplo:

<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">Left</button>
  <button type="button" class="btn btn-warning">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>
```
---

_OUTLINE-STYLES_: Estos botones solo muestran sus bordes y el contenido.

```
Ejemplo:

<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>
```
---

_CHECKBOX AND RADIO BUTTON GROPUS_: Conjunto de botones de casilla de verificación y de radio en un grupo de botones de aspecto uniforme.

- CHECKBOX:
```
Ejemplo:

<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
</div>
```
- RADIO-BUTTON:

```
Ejemplo:

<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
</div>
```
---

_BUTTON TOOLBAR_: Conjuntos de grupos de botones en barras de botones para obtener componentes más complejos. Es recomendable modificar las clases de utilidad según sea necesario para espaciar grupos, botones y más.

```
Ejemplo:

<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
    <button type="button" class="btn btn-primary">4</button>
  </div>
  <div class="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-secondary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-info">8</button>
  </div>
</div>
```

---

_VERTICAL VARIATION_: Hace que un conjunto de botones aparezca apilado verticalmente en lugar de horizontalmente. Los botones desplegables divididos no son compatibles con esta opción.

```
Ejemplo:

<div class="btn-group-vertical">
  <--Insertar código-->
</div>
```
---
•	**¿Que es un Carousel de bootstrap? Pon un ejemplo**

El carrusel es un pase de diapositivas para recorrer una serie de contenidos, construido con transformaciones CSS 3D y un poco de JavaScript. Funciona con una serie de imágenes, texto o marcas personalizadas. También incluye soporte para controles e indicadores de anterior/siguiente.

```
Ejemplo:


<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>
```
---

•	**¿Que es un spinner de bootstrap? Pon un ejemplo**

Los "spinners" de Bootstrap pueden utilizarse para mostrar el estado de carga en tus proyectos. Están construidos sólo con HTML y CSS, lo que significa que no necesitas ningún JavaScript para crearlos. Sin embargo, necesitarás algo de JavaScript personalizado para alternar su visibilidad. Su apariencia, alineación y tamaño pueden ser fácilmente personalizados con las clases de utilidad.

```
Ejemplo versión monocromática:

<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```
```
Ejemplo versión con colores:

<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

•	**¿Que es un navBar de bootstrap? Pon un ejemplo**

En Bootstrap las Navbars son responsivas por defecto, pero se pueden modificar fácilmente para cambiarlas. El comportamiento responsivo depende del plugin Collapse JavaScript.
Las Navbars vienen con soporte incorporado para un puñado de subcomponentes. 

Este es un ejemplo de todos los subcomponentes incluidos en una barra de navegación responsiva de temática ligera que se colapsa automáticamente en el punto de ruptura lg (grande):

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```
---

•	**¿Que es un modal de bootstrap? Pon un ejemplo**

Los modales se construyen con HTML, CSS y JavaScript. Se posicionan sobre todo lo demás en el documento y eliminan el desplazamiento del "body" para que el contenido del modal se desplace en su lugar.

Bootstrap sólo admite una ventana modal a la vez. Los modales anidados no están soportados.

Los modales utilizan position: fixed, que a veces puede ser un poco particular en su representación. Siempre que sea posible, hay que colocar el HTML modal en una posición de nivel superior para evitar posibles interferencias de otros elementos. 

```
Ejemplo:

<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```
---
•	**Existen inputs para subir archivos en Bootstrap? Pon un ejemplo**

Sí, concretamente el *Custom file input*

```
<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupFile01">Upload</label>
  <input type="file" class="form-control" id="inputGroupFile01">
</div>

<div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02">
  <label class="input-group-text" for="inputGroupFile02">Upload</label>
</div>

<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
  <input type="file" class="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload">
</div>

<div class="input-group">
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
  <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
</div>
```

---

•	**¿Qué es un plugin scrollspy en Bootstrap?Pon un ejemplo**

Cuando se implementa con éxito, el grupo de navegación o lista se actualizará en consecuencia, moviendo la clase ".active" de un elemento a otro en función de sus objetivos asociados.

```
Ejemplo:

<nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>...</p>
</div>

```

---

<h2 align="center"><b>FASE 2 -- Implementación Práctica</b><phase-two></h2>

A continuación detallaremos las aplicaciones prácticas a través de la documentación adquirida.

Hemos introducido uno de los varios NavBar disponibles modificando sus prioridades de color así como su cointenido para implementarlo en el Header de nuestro HTML:

```
<header>
    <nav class="navbar navbar-expand-lg " style="background-color: #E2FDFF">
        <div class="container-fluid ">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Barra de navegación</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Crear usuarios</a>
            </li>
            <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="/MOSTRAR USUARIOS.HTML">Mostrar usuarios</a>
            </li>
            </ul>
            </div>
        </div>
    </nav>
 </header>

 ```

El framework también provee de formularios predefinidos por lo que hemos cogido uno de la librería Bootstrap; lo hemos modificado añadiendo dos nuevos inputs para el correo y la clave de validación, también hemos centrado el formulario modificando la etiqueta semántica form utilizando el código estandarizado para Bootstrap: "w-25 p-3 mx-auto"

```
<main>
        <form class="w-25 p-3 mx-auto">
            <div class="mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="name" aria-describedby="emailHelp">

            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Correo </label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">Confía en nuestra ciberseguridad</div>
            </div>
            <div class="mb-3">
                <label for="password1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="password1">
            </div>
            <div class="mb-3">
                <label for="password2" class="form-label">Contraseña (repite tu contraseña)</label>
                <input type="password" class="form-control" id="password2">
            </div>

            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </main>

```

---
<h2 align="center"><b>FASE 3 -- Presentación del proyecto</b><phase-three></h2>
</p>

## Links

- [Repo] https://github.com/vaneebg/BOOTSTRAP

- [Documentación] (<Info url> https://getbootstrap.com/docs/4.0/getting-started/introduction/)


## Screenshots
**_TIPOS DE BOTONES_**
![Botones](/Assets/tipos%20de%20botones.png "Tipos de botones") 
**_ESTILO DE BOTONES_** 

![Estilos](/Assets/Boton%20basico.png "Estilo básico")

![Estilos](/Assets/Mixed%20styles.png "Estilo mixto")

![Estilos](/Assets/Outlined%20.png "Estilo de contorno")

![Estilos](/Assets/Checkbox.png "Estilo de checkbox")

![Estilos](/Assets/Radio.png "Estilo de radio")




## Built With

- HTML
- CSS
- Bootstrap
- Javascript

## Future Updates

- [ ]Responsive. 
- [ ]More transitions and animations. 

## Author

Germán Molero

- [Profile](https://github.com/Molerog "Germán Molero")
- [Email](mailto:moltorger@gmail.com "Hi!")


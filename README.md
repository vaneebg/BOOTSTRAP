<h1 align="center">BOOTSTRAP<project-name></h1>

<p align="center">

<project-description>

## Proyecto de Bootstrap

Proyecto de investigación de Boostrap con el objetivo de desarrollar nuevas habilidades de investigación y trabajo en equipo.

Las fases de la investigación han sido 3: Una primera fase basada en la investigación de la herramienta Bootstrap. Una segunda fase que ha sido la implementación práctica aprendida en la documentación aplicada a formularios y validación. Y por último una tercera fase correspondiente a la presentación del proyecto.

A continuación describiremos más detalladamente cada una de las fases comentadas.

## Fase 1

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



</p>

## Links

- [Repo] https://github.com/Molerog/Proyecto.Pagina.Personal 

- [Live](<Homepage url> https://molerog.github.io/Proyecto.Pagina.Personal/)


## Screenshots

![Home Page](/fotos/Main.png "Home Page")

![Sección](/fotos/Seccion.png "Seccion")


## Built With

- HTML
- CSS

## Future Updates

- [ ]Responsive. 
- [ ]More transitions and animations. 

## Author

Germán Molero

- [Profile](https://github.com/Molerog "Germán Molero")
- [Email](mailto:moltorger@gmail.com "Hi!")


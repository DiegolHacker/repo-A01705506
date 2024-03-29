console.log("hola mundo desde node");


//fs es el modulo para manipular el sistema de archivos
const filesystem = require("fs");
//filesystem.chmod //chmod modifica los permisos de un archivo.

//el primer parámetro es el archivo, el segundo es lo que va a escribir.
filesystem.writeFileSync("hola.txt", "hola desde node"); //node esta preparado y por default ejecuta el codigo de manera asincrona, ya que la ejecucion puede depender de otro sistema, por ejemplo si se tarda en responde el servidor se tardarí en terminar de ejecutar nuestro programa.
//El sync hace que no se siga ejecutando el programa hasta que el archivo se acabe de escribir.


//codigo asincrono, el arreglo se imprime en orden
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000]
for (let item of arreglo){ 
    setTimeout(() => { //set timeout toma una función que va a ejecutar como primer parametro y un intervalo de tiempo para ejecutarlo como segundo parametro. 
        console.log(item); //el tiempo que va a tardar en imprimir depende del numero, por eso al final queda todo ordenado.
    }, item);
}

console.log("Esto se imprime antes de los números");


const header = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Lab 5</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        </head>
        <body>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" width="76" height="28">
                </a>
            
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                </div>
            
                <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                    Home
                    </a>
            
                    <a class="navbar-item">
                    Documentation
                    </a>
            
                    <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        More
                    </a>
            
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                        About
                        </a>
                        <a class="navbar-item">
                        Jobs
                        </a>
                        <a class="navbar-item">
                        Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                        Report an issue
                        </a>
                    </div>
                    </div>
                </div>
            
                <div class="navbar-end">
                    <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                        <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                        Log in
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </nav>
            <section class="section">
                <div class="container">
`;


const footer = `
                </div>  
                            
            </section>



            <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                </div>  
            </footer>
        </body>
    </html>
`;



//http es un modulo node con todas las funciones de un servidor web
const http = require("http") //aqui ya hay un servidor completo 💀💀

const server = http.createServer((request, response) => { //request tiene la informacion de la request al servidor, response tiene la funcion que quiero ejecutar como respuesta a esa request.
    
    console.log(request.url);  //request.url para que te de la url a la que intentaron acceder, y asi.
    if(request.url == "/"){
        response.setHeader("Content-Type", "text/html");
        response.write(header);
        response.write(`
            <section class="section">
                <div class="container">
                    <h1 class="title">
                        Laboratorio 5: Frameworks.
                    </h1>
                    <p class="subtitle">
                        My first website with <strong>Bulma</strong>!
                    </p>

                    <div class="block">
                    <figure class="image is-16by9">
                        <img id="imagen_construir" src="">
                    </figure>
                    </div>
                    <div class="button">
                    <button id="boton_construir" class="">
                        Construir una casa
                    </button>
                    </div>
                

                    <div class="columns">
                        <div class="column">
                            <div class="card">
                                <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                </figure>
                                </div>
                                <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                    </figure>
                                    </div>
                                    <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                    </div>
                                </div>
                            
                                <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                    <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br>
                                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                                </div>
                            </div>
                        </div>
                    
                        <div class="column">
                            <div class="card">
                                <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                </figure>
                                </div>
                                <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                    </figure>
                                    </div>
                                    <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                    </div>
                                </div>
                            
                                <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                    <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br>
                                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                <div class="card-content">
                                <p class="title">
                                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                                </p>
                                <p class="subtitle">
                                    Jeff Atwood
                                </p>
                                </div>
                                <footer class="card-footer">
                                <p class="card-footer-item">
                                    <span>
                                    View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                                    </span>
                                </p>
                                <p class="card-footer-item">
                                    <span>
                                    Share on <a href="#">Facebook</a>
                                    </span>
                                </p>
                                </footer>
                            </div>
                        </div>

                        <div class="column">
                            <article class="message">
                                <div class="message-header">
                                <p>Hello World</p>
                                <button class="delete" aria-label="delete"></button>
                                </div>
                                <div class="message-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                                </div>
                            </article>
                        </div>

                    </div>

        `);

        response.write(`
            <script>const boton = document.getElementById("boton_construir");


            // boton.onclick= () => { //si le pongo buton.onclick = console.log()... se ejecuta sin que le haga click.
            //     const imagen = document.getElementById("imagen_construir");
            //     imagen.src = "https://preview.redd.it/rselpv96qca71.png?width=640&crop=smart&auto=webp&s=94e2a684798193c7c41ca7ccce92636aaa6fd763";
            //     boton.innerHTML = "Terminar casa";
            //     boton.className = "button is-warning";
            
            //     console.log("click");
            // };
            
            const construir_casa = () => { 
                const imagen = document.getElementById("imagen_construir");
                imagen.src = "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5ea4ca48-b3b1-4c8e-9fcb-e733cb6edd2c_1440x900.png";
                boton.innerHTML = "Terminar casa";
                boton.className = "button is-warning";
                boton.onclick = terminar_casa;
            
            };
            
            const terminar_casa = () => { 
                const imagen = document.getElementById("imagen_construir");
                imagen.src = "https://preview.redd.it/rselpv96qca71.png?width=640&crop=smart&auto=webp&s=94e2a684798193c7c41ca7ccce92636aaa6fd763";
                boton.innerHTML = "Destruir casa";
                boton.className = "button is-danger";
                boton.onclick = destruir_casa;
            
            };
            
            const destruir_casa = () => { 
                const imagen = document.getElementById("imagen_construir");
                imagen.src = "https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/d/d9/Flatland.png/revision/latest?cb=20200413025926";
                boton.innerHTML = "Construir casa";
                boton.className = "button is-primary";
                boton.onclick = construir_casa;
            
            };
            
            destruir_casa() //le quite el src="" en el html original y el class="buton is-primary" porque al ejecutar esto se asignan automaticamente, entonces se queda mas limpio el html. Ya no es necesaria la linea de abajo porque se asigna al ejecutar esto.
            // boton.onclick = construir_casa</script>
            `)
            response.write(footer);
    }

    else if(request.url == "/construir"){

        response.write(header);
        response.write(`
            <title>Agregar una construcción</title>
            <h1 class="title">Ups, la aldea que buscas dont exist</h1>
            <form action="construir" method="POST">
                <label for="nombre">Nombre</label><br>
                <input id=nombre type="text" class="input"></input><br>
                <label for="imagen">Imagen</label><br>
                <input id=imagen type="text" class="input"></input><br>
                <input class="button is-success" type="submit" value="Construir"></input>
            </form>
        `)


        response.write(footer);
        response.end();

    }

    else if(request.url == "/construir" && request.method == "POST"){
        request.on("data", (dato) =>{
            console.log(dato);
        })
    }

    else{ //error 404

        response.statusCode = 404;
        response.setHeader("Content-Type", "text/html");
        response.write(header);
        response.write(`
                          <h1 class="title">
                        Ups, la aldea que estás buscando no existe.
                    </h1>
                    <p class="subtitle">
                        Error <strong>404</strong>!
                    </p>
        `);
        response.write(footer);
        response.end();
        
    }
    
    
    response.end(); //envia la respuesta desde el servidor.
});

const datos = []

request.on("data", (dato) => {
    console.log(dato);
    datos.push(dato);
})

return request.on("end", () =>{
    const datos_completos = Buffer.concat(datos).toString();
    console.log(datos_completos);
    const nombre = datos_completos.split("&")[0].split("=")[1] //da datos como nombre=casa&imagen=askdbabsd entonces partimos por el & y tomamos lo que esta a la derecha del =
    console.log(nombre);
    const imagen = datos_completos.split("&")[1].split("=")[1] 
    
    return response.end();
})

server.listen(3000); //mantiene al servidor escuchando peticiones del cliente, revisa si hay nuevas peticiones en el puerto 3000. Ver nomas que no sea un puerto ya usado por otras apps.
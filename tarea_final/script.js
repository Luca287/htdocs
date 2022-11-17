//variables 
var peticion = new XMLHttpRequest();
var total = 0;
var contador = 0;
peticion.open("GET", "./productos.json", true);
//peticion de los productos y creacion de los div
peticion.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status == 200) {
        var productos = JSON.parse(peticion.responseText);

        productos.forEach(productos => {

            var folletos = document.getElementById("productos");
            var div = document.createElement("div");
            folletos.appendChild(div);

            var link = document.createElement('a');
            link.setAttribute('href', '#');
            link.innerText = productos.nombre;

            div.appendChild(link);

            var imagen = document.createElement('img');
            imagen.setAttribute("alt", "imagen del producto");
            imagen.setAttribute("src", productos.url_foto);

            div.appendChild(imagen);

            var descripcion = document.createElement("p");
            descripcion.innerText = productos.descripcion;

            div.appendChild(descripcion);

            var precio = document.createElement("p");
            precio.innerText = productos.precio;

            div.appendChild(precio);

            // tabla de productos
            var fila = document.createElement("tr");
            var celdanombre = document.createElement("td");
            celdanombre = productos.nombre;
            fila.appendChild(celdanombre);

            var celdaprecio = document.createElement("td");
            celdaprecio = productos.precio;
            fila.appendChild(celdaprecio);

            var celdaborrar = document.createElement("td");
            var borrar = document.createElement("a");
            borrar.setAttribute("href", "#");
            borrar.innerText("X");
            celdaborrar.appendChild(borrar);
            fila.appendChild(celdaborrar);

            // funcionalidad del total y el numero de productos
            link.addEventListener("click", function (event) {
                event.preventDefault();
                total = total + productos.precio;
                var ptotal = document.getElementById("total");
                ptotal.innerText = total;
                contador = contador + 1
                var pcontador = document.getElementById("total")
                pcontador.innerText = contador
            });

             // funcionalidad para agregar a la tabla


        });





    }
});
peticion.send();

var MasCaro = document.getElementById("Caro")
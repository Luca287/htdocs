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

            var vnombre = document.createElement("p");
            vnombre.innerText = productos.nombre
            div.appendChild(vnombre)

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

            var link = document.createElement('a');
            link.setAttribute('href', '#');
            link.text = ("Agregar al carrito")
            div.appendChild(link);

            //crear fila de la tabla
            link.addEventListener("click", function (event) {
                event.preventDefault();

                var fila = document.createElement("tr");
                var celdanombre = document.createElement("td");
                celdanombre = productos.nombre;
                fila.appendChild(celdanombre);

                var celdaprecio = document.createElement("td");
                celdaprecio = productos.precio;
                fila.appendChild(celdaprecio);

                //agregar elemento sumar en total y contador
                var ptotal = document.getElementById("total");
                total = total + productos.precio;
                ptotal.innerText = total;

                var pcontador = document.getElementById("cantidad")
                contador = contador + 1
                pcontador.innerText = contador
                
                //borrar de la fila
                var celdaborrar = document.createElement("td");
                var borrar = document.createElement("a");
                borrar.setAttribute("href", "#");
                borrar.innerText("X");
                celdaborrar.appendChild(borrar);
                fila.appendChild(celdaborrar);

                //borrar elemento restar en total y contador
                borrar.addEventListener("click", function (event) {
                    event.preventDefault();
                    console.log(event.target.parentElement.parentElement.remove());
                    Total = total - productos.precio;
                    contador = contador - 1

                });

                document.querySelector("tbody").appendChild(fila);
            });

        });
    };
});
peticion.send();

var MasCaro = document.getElementById("Caro")
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

                //agregar elemento sumar en total y contador
                var ptotal = document.getElementById("total");
                total = total + productos.precio;
                ptotal.innerText = total;

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
var precioMasAlto = -1;
var BotonMasCaro = document.getElementById("Caro");

BotonMasCaro.addEventListener("clik", function (event) {
    var productosCarrito = document.querySelector('tbody').children;

    for (let index = 0; index < productosCarrito.length; index++) {
        const productorow = productosCarrito[index];

        let productoNombre = productoRow.children[0].innerText;
        let productoPrecio = Number(productoRow.children[1].innerText);

        if (productoPrecio > precioMasAlto) {

            precioMasAlto = productoPrecio

        }
        var preciomascaro = document.getElementById("preciomascaro")
        preciomascaro.innerText = precioMasAlto

    }


});






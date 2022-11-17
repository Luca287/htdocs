var peticion = new XMLHttpRequest();
var total = 0
var contador = 0
peticion.open("GET", "./productos.json", true);

peticion.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status == 200) {
        var productos = JSON.parse(this.responseText);

        productos.forEach(productos => {
            var folletos = document.getElementById("productos");
            var div = document.createElement("div");
            folletos.appendChild(div);

            var link = document.createElement('a');
            link.setAttribute('href', '#');
            link.innerText = productos.nombre;

            div.appendChild(link);

            var imagen = document.createElement('img');
            imagen.setAttribute('alt', "imagen del producto");
            imagen.setAttribute('src', productos.url_foto);

            div.appendChild(imagen);

            var descripcion = document.createElement("p");
            descripcion.innerText = productos.descripcion;

            div.appendChild(descripcion);

            var precio = document.createElement ("p");
            precio.innerText = productos.precio;

            div.appendChild(precio);


            var fila = document.createElement ("tr");
            var celdanombre = document.createElement ("td");
            celdanombre = productos.nombre;
            fila.appendChild(celdanombre);
            var celdaprecio = document.createElement ("td");
            celdaprecio = productos.precio;
            fila.appendChild(celdaprecio);

        });

            

    }
});
peticion.send();

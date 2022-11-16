var peticion = new XMLHttpRequest();
var total = 0
var contador = 0
peticion.open("GET", "./productos.json", true);

peticion.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status == 200) {
        var productos = JSON.parse(this.responseText);

        productos.forEach(element => {
            var folletos = document.getElementById("productos")
            var div = document.createElement("div");
            div.appendChild(folletos)

            var link = document.createElement('a');
            link.setAttribute('href', '#');
            link.innerText = productos.nombre;

            div.appendChild(link);

            var imagen = document.createElement('img');
            imagen.setAttribute('alt', "imagen del producto");
            imagen.setAttribute('src', productos.url_foto);

            div.appendChild(imagen);

            var descripcion = document.createElement("p");
            descripcion.innerText = (productos.descripcion);

            div.appendChild(descripcion)

        });








    }
});
peticion.send();

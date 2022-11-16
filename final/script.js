var peticion = new XMLHttpRequest();
peticion.open("GET", "./productos.json", true);

peticion.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status == 200) {
        var productos = JSON.parse(this.responseText);
        console.log(productos);
        
    }

    productos.forEach(p => {
        var link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerText = p.nombre;
    })

        // Crear fila
        var fila = document.createElement('tr');
        var tdNombre = document.createElement('td');
        tdNombre.innerText = p.nombre;
        var tdPrecio = document.createElement('td');
        tdPrecio.innerText = p.precio;
        fila.appendChild(tdNombre);
        fila.appendChild(tdPrecio);


});
peticion.send();

//document.querySelector ("#productos").innerHTML = this.responseText;
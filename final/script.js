var peticion = new XMLHttpRequest();
var total = 0
var contador = 0
peticion.open("GET", "./productos.json", true);

peticion.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status == 200) {
        var productos = JSON.parse(this.responseText);
        console.log(productos);
        console.log(productos.nombre)
        
        
        productos.forEach(element => {
        var seleccionar = document.createElement ('a');
            seleccionar.setAttribute('href', '#');
            seleccionar.innerText = productos.nombre;
        });


        
      




        document.getElementById('productos').appendChild(seleccionar);   
    }
});
peticion.send();





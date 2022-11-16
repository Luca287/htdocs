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




 // for (let index = 0; index < productos.length; index++) {
 //       var link = productos [index];
  //      var link = document.createElement ('a');
  //          link.setAttribute('href', '#');
  //          link.innerText = productos.nombre;
   //    }

//var prueba = document.createElement ("a");
//prueba.setAttribute ("href","@");
//prueba.innerText = contador
 // var fila = document.createElement('tr');
       // var tdNombre = document.createElement('td');
       // tdNombre.innerText = productos.nombre;
       // var tdPrecio = document.createElement('td');
        //tdPrecio.innerText = productos.precio;
       // fila.appendChild(tdNombre);
       // fila.appendChild(tdPrecio);
var total = 0
var peticion = new XMLHttpRequest();
peticion.open("GET", "./productos.json", true);

peticion.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status == 200) {
        var productos = JSON.parse(this.responseText);
         console.log(productos);
    }

    
});
var peticion = new XMLHttpRequest();
var total = 0
var contador = 0
peticion.open("GET", "./productos.json", true);

peticion.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status == 200) {
        var productos = JSON.parse(this.responseText);
        console.log(productos);
        
        productos.forEach(element => {
            var link = document.createElement ('a');
        });
        
    }

    


});
peticion.send();

//document.querySelector ("#productos").innerHTML = this.responseText;
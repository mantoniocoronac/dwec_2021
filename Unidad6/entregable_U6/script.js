document.getElementById("mostrarArmas").addEventListener("click", mostrarArmas);
document.getElementById("mostrarArmasFetch").addEventListener("click", mostrarArmasFetch);


function mostrarArmas() {
    let armas;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Al hacer parse de un array recibimos un array
            armas = JSON.parse(this.responseText);

            cargarJson(armas);
        }
    };
    xhr.open("GET", "listar_armas.php", true);
    xhr.send();
}

const selectElement = document.getElementById("bando");
function cargarJson(armas) {
    let tabla = "<tr><th>Nombre</th><th>Descripcion</th><th>Imagen</th><th>Bando</th></tr>";
    for (let i = 0; i < armas.length; i++) {
        tabla += "<tr><td><b>";
        tabla += armas[i].nombre;
        tabla += "</b></td><td>";
        tabla += armas[i].descripcion;
        tabla += "</td><td>";
        tabla += "<img src='" + armas[i].imagen + "' style='width: 70px; height: 50px;' />";
        tabla += "</td><td>";
        tabla += armas[i].bando;
        tabla += "</td></tr>";
    }
    document.getElementById("normandia").innerHTML = tabla;
    selectElement.addEventListener('change', function() {
        let tabla = "<tr><th>Nombre</th><th>Descripción</th><th>Imagen</th><th>Bando</th></tr>";
        console.log(document.getElementById("bando").value);
        for (let i = 0; i < armas.length; i++) {
            if (armas[i].bando == document.getElementById("bando").value){
                tabla += "<tr><td><b>";
                tabla += armas[i].nombre;
                tabla += "</b></td><td>";
                tabla += armas[i].descripcion;
                tabla += "</td><td>";
                tabla += "<img src='" + armas[i].imagen + "' style='width: 70px; height: 50px;' />";
                tabla += "</td><td>";
                tabla += armas[i].bando;
                tabla += "</td></tr>";
            }
        }
        document.getElementById("normandia").innerHTML = tabla;
    });
}

function mostrarArmasFetch(){
    fetch("listar_armas.php")
    .then((response) => response.json())
    .then((data) => {
        let tabla="<table><tr><th>Nombre</th><th>Descripcion</th><th>Imagen</th><th>Bando</th></tr></table>"
        for (armas of data) {
            tabla += "<tr><td><b>";
            tabla += armas.nombre;
            tabla += "</b></td><td>";
            tabla += armas.descripcion;
            tabla += "</td><td>";
            tabla += "<img src='" + armas.imagen + "' style='width: 70px; height: 50px;' />";
            tabla += "</td><td>";
            tabla += armas.bando;
            tabla += "</td></tr>";
            tabla+="</table>";  
        }
        document.getElementById("normandia").innerHTML=tabla;
        selectElement.addEventListener('change', function() {
            let tabla = "<tr><th>Nombre</th><th>Descripción</th><th>Imagen</th><th>Bando</th></tr>";
            for (armas of data) {
                if (armas.bando == document.getElementById("bando").value){
                    tabla += "<tr><td><b>";
                    tabla += armas.nombre;
                    tabla += "</b></td><td>";
                    tabla += armas.descripcion;
                    tabla += "</td><td>";
                    tabla += "<img src='" + armas.imagen + "' style='width: 70px; height: 50px;' />";
                    tabla += "</td><td>";
                    tabla += armas.bando;
                    tabla += "</td></tr>";
                    tabla+="</table>";  
                }
            }
            document.getElementById("normandia").innerHTML = tabla;
        });
        
    })
    .catch((err) => console.log(err));
}
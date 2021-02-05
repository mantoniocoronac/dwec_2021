document.getElementById("modificarDatos").addEventListener("click", modificarDatos);
document.getElementById("cargarhttp").addEventListener("click", cargarhttp);
document.getElementById("cargarFetch").addEventListener("click", cargarFetch);

function modificarDatos(){
    document.getElementById("resultados").innerHTML = "Comunidad Actualizada";
    let object = {
        ccaa: document.getElementById("ccaa").value,
        dosisEntregadas: parseInt(document.getElementById("dosisEntregadas").value),
        dosisAdministradas: parseInt(document.getElementById("dosisAdministradas").value),
        dosisPautaCompletada: parseInt(document.getElementById("dosisPautaCompletada").value),
        porcentajeEntregadas: parseInt(document.getElementById("porcentajeEntregadas").value),
        porcentajePoblacionAdministradas: parseInt(document.getElementById("porcentajePoblacionAdministradas").value),
        porcentajePoblacionCompletas: parseInt(document.getElementById("porcentajePoblacionCompletas").value),
      };
      fetch('insertar_comunidades.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:"objeto="+JSON.stringify(object)
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        alert(result);
    })
    .catch (function (error) {
        console.log('Request failed', error);
    });
}

function cargarhttp(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
        cargarTabla(xhr);
        }
    };
    xhr.open("GET", "https://covid-vacuna.app/data/latest.json", true);
    xhr.send();
}

let select = document.getElementById("ccaa");
let i = 0;
function cargarTabla(json) {
    let docJSON = JSON.parse(json.responseText);
    let tabla = "<tr><th>CC.AA</th><th>D.Entregadas:</th><th>D.Administradas</th><th>D.Completa</th><th>P.Entregadas</th><th>P.Administrada</th><th>P.Completa</th></tr>";
    for (let cm of docJSON) {
        tabla += "<tr><td><b>";
        tabla += cm.ccaa;
        tabla += "</b></td><td>";
        tabla += cm.dosisEntregadas;
        tabla += "</td><td>";
        tabla += cm.dosisAdministradas;
        tabla += "</td><td>";
        tabla += cm.dosisPautaCompletada;
        tabla += "</td><td>";
        tabla += cm.porcentajeEntregadas;
        tabla += "</td><td>";
        tabla += cm.porcentajePoblacionAdministradas;
        tabla += "</td><td>";
        tabla += cm.porcentajePoblacionCompletas;
        tabla += "</td></tr>";
        
        if(cm.ccaa!="Totales"){
            let option = document.createElement("option");
            option.setAttribute("value",i);
            option.textContent = cm.ccaa;
            select.appendChild(option);
            i++;
        }
    }
    document.getElementById("mostrar").innerHTML = tabla;
    document.getElementById("resultados").innerHTML = "Datos cargados de la web";

}

function cargarFetch(){
    fetch("https://covid-vacuna.app/data/latest.json")
    .then((response) => response.json())
    .then((data) => {
        let tabla = "<tr><th>CC.AA</th><th>D.Entregadas:</th><th>D.Administradas</th><th>D.Completa</th><th>P.Entregadas</th><th>P.Administrada</th><th>P.Completa</th></tr>";
        for (cm of data) {
            tabla += "<tr><td><b>";
            tabla += cm.ccaa;
            tabla += "</b></td><td>";
            tabla += cm.dosisEntregadas;
            tabla += "</td><td>";
            tabla += cm.dosisAdministradas;
            tabla += "</td><td>";
            tabla += cm.dosisPautaCompletada;
            tabla += "</td><td>";
            tabla += cm.porcentajeEntregadas;
            tabla += "</td><td>";
            tabla += cm.porcentajePoblacionAdministradas;
            tabla += "</td><td>";
            tabla += cm.porcentajePoblacionCompletas;
            tabla += "</td></tr>";

            if(cm.ccaa!="Totales"){
                let option = document.createElement("option");
                option.setAttribute("value",i);
                option.textContent = cm.ccaa;
                select.appendChild(option);
                i++;
            }
        }
        document.getElementById("mostrar").innerHTML=tabla;
        document.getElementById("resultados").innerHTML = "Datos cargados de la web";

        let object = {
            ccaa: ccaa,
            dosisEntregadas: dosisEntregadas,
            dosisAdministradas: dosisAdministradas,
            dosisPautaCompletada: dosisPautaCompletada,
            porcentajeEntregadas: porcentajeEntregadas,
            porcentajePoblacionAdministradas: porcentajePoblacionAdministradas,
            porcentajePoblacionCompletas: porcentajePoblacionCompletas,
        };
          fetch('insertar_comunidades.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:"objeto="+JSON.stringify(object)
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            alert(result);
        })
        .catch (function (error) {
            console.log('Request failed', error);
        });
    })
    .catch((err) => console.log(err));
    
    
}


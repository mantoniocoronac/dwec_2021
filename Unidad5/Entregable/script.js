function generarTabla(){

    var body = document.getElementsByTagName("body")[0];
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var nfilas = document.getElementById("nfil").value;
    var ncol = document.getElementById("ncol").value;
    var valdef = document.getElementById("valdef").value;
    var colorbord = document.getElementById("colorbord").value;
    var grosbord = document.getElementById("grosbord").value;
    var header = document.getElementById("header").checked;
    var barra = document.createElement("hr");

    for (var i = 0; i < nfilas; i++) {
        var filas = document.createElement("tr");
        for (var j = 0; j < ncol; j++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(valdef);
            celda.appendChild(textoCelda);
            filas.appendChild(celda);
        }
        tblBody.appendChild(filas);
    }

    

    document.body.appendChild(barra);
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("borderColor", colorbord);
    tabla.setAttribute("border", grosbord);
    if(header == true){
        var input = document.createElement("input");
        for(var f = 0;f<ncol;f++){
            body.appendChild(input);
        }
    }
}
function Vuelo(){
    this.setCodigo = function(codigo){
        this.codigo = codigo;
    }
    this.setHoraLLegada = function(horaLlegada){
        this.horaLlegada = horaLlegada;
    }
    this.setHoraSalida = function(horaSalida){
        this.horaSalida = horaSalida;
    }

    this.comprobarHora = function() {
        if(this.horaLlegada.getTime() < this.horaSalida.getTime()) {
            alert("Hora correcta");
        } else {
            alert("Hora incorrecta");
        }
    }
}

function aeropuerto(){
    this.nombre = "";
    this.ciudad = "";
    this.vuelo=[];

    this.anadirAeropuerto = function (nombre,ciudad){
        this.nombre = nombre;
        this.ciudad = ciudad;
    }

    this.anadirVuelo = function(vuelo) {
        this.vuelo.push(vuelo);
    }

    this.vueloDiario = function(){
        return this.vuelo.length;
    }
}


for (let i = 0; i < 10; i++) {
    let vuelo = new Vuelo();
    let codigo = "0" + i.toString();
    vuelo.setCodigo(codigo);
    vuelo.setHoraSalida(11);
    vuelo.setHoraLLegada(12);
    aeropuerto.anadirVuelo(vuelo)
}

aeropuerto.getVuelos()[0].setHoraSalida(13);
aeropuerto.getVuelos()[0].comprobarHora();

aeropuerto.getVuelos()[0].setHoraSalida(14);
aeropuerto.getVuelos()[0].comprobarHora();

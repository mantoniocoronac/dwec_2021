window.onload = iniciar();

function iniciar() {
  document.getElementById("generarTabla").addEventListener("click", generarTabla, true);
  document.getElementById("generarTablaFetch").addEventListener("click", generarTablaFetch, true);
  document.getElementById("personajes").addEventListener("click", personajes, true);
}

function generarTabla() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      cargarTabla(xhr);
    }
  };
  xhr.open("GET", "ghibli_films.json", true);
  xhr.send();
}

function cargarTabla(json) {
  let docJSON = JSON.parse(json.responseText);

  let id;
  let title;
  let description;
  let director;
  let producer;
  let release_date;
  let rt_score;
  let url;

  let films = new Array();

  for (let dato of docJSON) {
    id = dato.id;
    title = dato.title;
    description = dato.description;
    director = dato.director;
    producer = dato.producer;
    release_date = dato.release_date;
    rt_score = dato.rt_score;
    url = dato.url;

    let film = {
      id: id,
      title: title,
      description: description,
      director: director,
      producer: producer,
      release_date: release_date,
      rt_score: rt_score,
      url: url,
    };
    films.push(film);
  }

  let tabla ="<tr><th>Title</th><th>Description</th><th>Director</th><th>Producer</th><th>Release_Date</th><th>Rt_Score</th></tr>";

  for (let cm of docJSON) {
    tabla += "<tr><td><b>";
    tabla += cm.title;
    tabla += "</b></td><td>";
    tabla += cm.description;
    tabla += "</td><td>";
    tabla += cm.director;
    tabla += "</td><td>";
    tabla += cm.producer;
    tabla += "</td><td>";
    tabla += cm.release_date;
    tabla += "</td><td>";
    tabla += cm.rt_score;
    tabla += "</td></tr>";
  }
  document.getElementById("mostrar").innerHTML = tabla;
  console.log("Respuesta de films recibida (XMLHttpRequest)")
  document.getElementById("respuestas").innerHTML = "Respuesta de films recibida (XMLHttpRequest)";

  let xhr = new XMLHttpRequest();
  let parametros = JSON.stringify(films);
  xhr.open("POST", "insert_films.php", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(parametros);
  console.log("Respuesta de insert_films.php recibida");
  document.getElementById("respuestas").innerHTML += "Respuesta de insert_films.php recibida";

}

function generarTablaFetch() {
  fetch("ghibli_films.json")
    .then((response) => response.json())
    .then((data) => {
      let id;
      let title;
      let description;
      let director;
      let producer;
      let release_date;
      let rt_score;
      let url;

      let films = new Array();

      for (let dato of data) {
        id = dato.id;
        title = dato.title;
        description = dato.description;
        director = dato.director;
        producer = dato.producer;
        release_date = dato.release_date;
        rt_score = dato.rt_score;
        url = dato.url;

        let film = {
          id: id,
          title: title,
          description: description,
          director: director,
          producer: producer,
          release_date: release_date,
          rt_score: rt_score,
          url: url,
        };
        films.push(film);
      }

      let tabla ="<tr><th>Title</th><th>Description</th><th>Director</th><th>Producer</th><th>Release_Date</th><th>Rt_Score</th></tr>";

      for (let dato of data) {
        tabla += "<tr><td><b>";
        tabla += dato.title;
        tabla += "</b></td><td>";
        tabla += dato.description;
        tabla += "</td><td>";
        tabla += dato.director;
        tabla += "</td><td>";
        tabla += dato.producer;
        tabla += "</td><td>";
        tabla += dato.release_date;
        tabla += "</td><td>";
        tabla += dato.rt_score;
        tabla += "</td></tr>";
      }
      document.getElementById("mostrar").innerHTML = tabla;
      console.log("Respuesta de films recibida (Fetch)");
      document.getElementById("respuestas").innerHTML = "Respuesta de films recibida (Fetch)";


      fetch("insert_films.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(films),
      }).catch((error) => console.log("Error: " + error));
      console.log("Respuesta de insert_films.php recibida");
      document.getElementById("respuestas").innerHTML += "Respuesta de insert_films.php recibida";
    })
    .catch((err) => console.log(err));
}

function personajes() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      tablaPersonajes(xhr);
    }
  };
  xhr.open("GET", "ghibli_people.json", true);
  xhr.send();
}

function tablaPersonajes(json) {
  let docJSON = JSON.parse(json.responseText);

  let id;
  let name;
  let gender;
  let age;
  let eye_color;
  let hair_color;

  let peoples = new Array();

  for (let dato of docJSON) {
    id = dato.id;
    name = dato.name;
    gender = dato.gender;
    age = dato.age;
    eye_color = dato.eye_color;
    hair_color = dato.hair_color;

    let people = {
      id: id,
      name: name,
      gender: gender,
      age: age,
      eye_color: eye_color,
      hair_color: hair_color,
    };
    peoples.push(people);
  }

  let tabla ="<tr><th>Name</th><th>Gender</th><th>Age</th><th>Eye_color</th><th>Hair_color</th></tr>";

  for (let cm of docJSON) {
    tabla += "<tr><td><b>";
    tabla += cm.name;
    tabla += "</b></td><td>";
    tabla += cm.gender;
    tabla += "</td><td>";
    tabla += cm.age;
    tabla += "</td><td>";
    tabla += cm.eye_color;
    tabla += "</td><td>";
    tabla += cm.hair_color;
    tabla += "</td></tr>";
  }
  document.getElementById("mostrarPersonajes").innerHTML = tabla;
  console.log("Respuesta de people recibida")
  document.getElementById("respuestas").innerHTML = "Respuesta de people recibida";


  let xhr = new XMLHttpRequest();
  let parametros = JSON.stringify(peoples);
  xhr.open("POST", "insert_people.php", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(parametros);
  console.log("Respuesta de insert_people.php recibida");
  document.getElementById("respuestas").innerHTML = "Respuesta de people_by_film_id.php recibida";


  generarFilmPersonajes();
}

function generarFilmPersonajes() {
  fetch("ghibli_films.json")
    .then((response) => response.json())
    .then((data) => {
      let tabla ="<tr><th>Title</th><th>Description</th><th>Director</th><th>Producer</th><th>Release_Date</th><th>Rt_Score</th><th>Personajes</th></tr>";
      let cont = 0;
      let but = document.createElement("input");
      but.setAttribute("type", "submit");
      but.setAttribute("name", "personajes");
      but.setAttribute("value", "Personajes");
      but.setAttribute("onclick", "generarPersonaje()");
      for (let dato of data) {
        tabla += "<tr><td><b>";
        tabla += dato.title;
        tabla += "</b></td><td>";
        tabla += dato.description;
        tabla += "</td><td>";
        tabla += dato.director;
        tabla += "</td><td>";
        tabla += dato.producer;
        tabla += "</td><td>";
        tabla += dato.release_date;
        tabla += "</td><td>";
        tabla += dato.rt_score;
        tabla +="</td><td><input type='submit' id=' "+cont+" ' name='personaje' value='Personajes' onclick='generarPersonaje()'>";
        tabla += "</input></td></tr>";
        cont++;
      }
      document.getElementById("mostrar").innerHTML = tabla;
    })
    .catch((err) => console.log(err));

    let docTabla = document.getElementById("personajes_tabla")

  docTabla("id").addEventListener("click", generarPersonaje, true);

}

function generarPersonaje() {

    clickeado = personaje.id;

    fetch("ghibli_films.json")
    .then((response) => response.json())
    .then((data) => {

        let id_film;

        let films = new Array();

        for (let dato of data) {
            if(dato.id==cont){
            id_film = dato.id;

            let film = {
            id_film: id_film,
            };
        }
            films.push(film);
        }

        fetch("ghibli_people.json")
          .then((response) => response.json())
          .then((data) => {
            let raya = "<br><hr>";
            document.getElementById("raya").innerHTML = raya;

            tabla ="<tr><th>Name</th><th>Gender</th><th>Age</th><th>Eye_color</th><th>Hair_color</th></tr>";
            cont = 0;
            for (let dato of data) {
                if(cont==clickeado){
                    tabla += "<tr><td><b>";
                    tabla += dato.name;
                    tabla += "</b></td><td>";
                    tabla += dato.gender;
                    tabla += "</td><td>";
                    tabla += dato.age;
                    tabla += "</td><td>";
                    tabla += dato.eye_color;
                    tabla += "</td><td>";
                    tabla += dato.hair_color;
                    tabla += "</td></tr>";
                }
            }
            document.getElementById("personajes_tabla").innerHTML = tabla;
          })
          .catch((err) => console.log(err));


      fetch("people_by_film_id.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(films),
      }).catch((error) => console.log("Error: " + error));
      console.log("Respuesta de people_by_film_id.php recibida");
    })
    .catch((err) => console.log(err));

}

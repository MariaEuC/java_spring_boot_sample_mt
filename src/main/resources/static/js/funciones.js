// ContentType: Cuando envíe datos al servidor, use este tipo de contenido. El valor predeterminado es application/x-www-form-urlencoded; charset=UTF-8, lo cual está bien para la mayoría de los casos.
// DataType: El tipo de datos que espera del servidor. Si no se especifica ninguno, jQuery intentará inferirlo en función del tipo MIME de la respuesta. Puede ser text, xml, html, script, json, jsonp.

//{"name":"cat1","description":"test category"}

function guardarInformacionCategory() {

    $("#resultadoCategory").empty();

    let myData = { name: $("#nombreCategory").val(), description: $("#descripcionCategory").val() }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'http://localhost:8080/api/Category/save',
            type: 'POST',
            data: dataToSend,
            datatype: "JSON",
            contentType: 'application/json',
            success: function (respuesta) {
                console.log(respuesta);
                alert("Inserción exitosa");
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            }

        }
    );
}


function traerInformacionCategory() {
    $.ajax(
        {
            url: "http://localhost:8080/api/Category/all",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                pintarRespuestaCategory(respuesta);

            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            }
        }
    );
}


function pintarRespuestaCategory(items) {

    $("#resultadoCategory").empty();

    let myTable = "<table>";
    myTable += "<tr><th>Nombre</th><th>Descripcion</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        // myTable+="<td><button onclick='borrarCategoria("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoCategory").append(myTable);
}


//{"owner":"BestParties sas","capacity":200,"category":{"id":1},"name":"Salon para viejoteca","description":"Salon para viejoteca"}
function guardarInformacionPartyroom() {

    $("#resultado").empty();

    let myData = { owner: $("#ownerPartyroom").val(), capacity: $("#capacityPartyroom").val(), category: { id: $("#idCategory").val() }, name: $("#nombrePartyroom").val(), description: $("#descripcionPartyroom").val() }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'http://localhost:8080/api/Partyroom/save',
            type: 'POST',
            data: dataToSend,
            datatype: "JSON",
            contentType: 'application/json',
            success: function (respuesta) {
                //console.log(respuesta);
                alert("Inserción exitosa");
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            }

        }
    );
}


function traerInformacionPartyroom() {
    $.ajax(
        {
            url: "http://localhost:8080/api/Partyroom/all",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                pintarRespuestaPartyroom(respuesta);
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            }


        }

    );
}

/*[{"id":1,"name":"Salon para viejoteca","owner":"BestParties sas","capacity":200,"description":"Salon para viejoteca",
"category":{"id":1,"name":"cat1","description":"test category"},
"messages":[],
"reservations":[]}]
*/
function pintarRespuestaPartyroom(items) {

    $("#resultado").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Nombre</th><th>Dueño</th><th>Capacidad</th><th>Descripcion</th><th>Nombre Categoria</th><th>Descripcion Categoria</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";

        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].owner + "</td>";
        myTable += "<td>" + items[i].capacity + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        myTable += "<td>" + items[i].category.name + "</td>";
        myTable += "<td>" + items[i].category.description + "</td>";
        // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
}

//{"name":"Agustin Parra","email":"agustin@gmail.com","password":"agustin123","age":18}
function guardarInformacionClient() {

    $("#resultadoClient").empty();

    let myData = { name: $("#nameClient").val(), email: $("#emailClient").val(), password: $("#passwordClient").val(), age: $("#ageClient").val() }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'http://localhost:8080/api/Client/save',
            type: 'POST',
            data: dataToSend,
            datatype: "JSON",
            contentType: 'application/json',
            success: function (respuesta) {
                console.log(respuesta);
                alert("Inserción exitosa");
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            }

        }
    );
}

function traerInformacionClient() {
    $.ajax(
        {
            url: "http://localhost:8080/api/Client/all",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                pintarRespuestaClient(respuesta);
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            }
        }
    );
}

// [{"idClient":1,"email":"agustin@gmail.com","password":"agustin123","name":"Agustin Parra","age":18,"messages":[],"reservations":[]}]
function pintarRespuestaClient(items) {

    $("#resultadoClient").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Codigo</th><th> Correo</th><th>Nombre</th><th>Edad</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].idClient + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoClient").append(myTable);
}

//{"messageText":"Me gusta.","client":{"idClient":1},"partyroom":{"id":1}}

function guardarInformacionMessage() {

    $("#resultadoMessage").empty();

    let myData = { messageText: $("#messageM").val(), client: { idClient: $("#idClientM").val() }, partyroom: { id: $("#idPartyroomM").val() } }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {
            url: 'http://localhost:8080/api/Message/save',
            type: 'POST',
            data: dataToSend,
            datatype: "JSON",
            contentType: 'application/json',
            success: function (respuesta) {
                console.log(respuesta);
                alert("Inserción exitosa");
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            }

        }
    );
}

function traerInformacionMessage() {
    $.ajax(
        {
            url: "http://localhost:8080/api/Message/all",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                // console.log(respuesta);
                pintarRespuestaMessage(respuesta);
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            }


        }

    );
}

/* [{"idMessage":1,"messageText":"Me gusta.",
"partyroom":{"id":1,"name":"Salon para viejoteca","owner":"BestParties sas","capacity":200,"description":"Salon para viejoteca",
"category":{"id":1,"name":"cat1","description":"test category"}},
"client":{"idClient":1,"email":"agustin@gmail.com","password":"agustin123","name":"Agustin Parra","age":18}}]
*/
function pintarRespuestaMessage(items) {

    $("#resultadoMessage").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th> Mensaje</th><th>Nombre Partyroom</th><th>Capacidad Partyroom</th><th>Descripcion Partyroom</th><th>Nombre Cliente</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].messageText + "</td>";
        myTable += "<td>" + items[i].partyroom.name + "</td>";
        myTable += "<td>" + items[i].partyroom.capacity + "</td>";
        myTable += "<td>" + items[i].partyroom.description + "</td>";
        myTable += "<td>" + items[i].client.name + "</td>";

        // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoMessage").append(myTable);
}

// 	{"startDate":"2020-12-20","devolutionDate":"2020-12-20","client":{"idClient":1},"partyroom":{"id":1}}
function guardarInformacionReservation() {

    $("#resultadoReservation").empty();

    let myData = { startDate: $("#fechaInicio").val(), devolutionDate: $("#fechaFinal").val(), client: { idClient: $("#idClienteR").val() }, partyroom: { id: $("#idSalonR").val() } }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'http://localhost:8080/api/Reservation/save',
            type: 'POST',
            data: dataToSend,
            datatype: "JSON",
            contentType: 'application/json',
            success: function (respuesta) {
                console.log(respuesta);
                alert("Inserción exitosa");
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            }

        }
    );
}

function traerInformacionReservation() {
    $.ajax(
        {
            url: "http://localhost:8080/api/Reservation/all",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                pintarRespuestaReservation(respuesta);
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            }


        }

    );
}

/*[{"idReservation":1,"startDate":"2020-12-20T00:00:00.000+00:00","devolutionDate":"2020-12-20T00:00:00.000+00:00","status":"created",
"partyroom":{"id":1,"name":"Salon para viejoteca","owner":"BestParties sas","capacity":200,"description":"Salon para viejoteca",
"category":{"id":1,"name":"cat1","description":"test category"},
"messages":[{"idMessage":1,"messageText":"Me gusta."}]},
"client":{"idClient":1,"email":"agustin@gmail.com","password":"agustin123","name":"Agustin Parra","age":18},
"score":null}]
*/
function pintarRespuestaReservation(items) {

    $("#resultadoReservation").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Codigo Reservacion</th><th> Fecha Inicio</th><th>Fecha Fin</th><th>Status</th><th>Nombre Partyroom</th><th>Codigo Cliente</th>
    <th>Nombre Cliente</th></tr><th>Correo Cliente</th><th>Calificacion</th><th>Mensaje Calificacion</th></tr>";

    /*
     <th>Mensaje</th>
     */
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].idReservation + "</td>";
        myTable += "<td>" + items[i].startDate + "</td>";
        myTable += "<td>" + items[i].devolutionDate + "</td>";
        myTable += "<td>" + items[i].status + "</td>";
        myTable += "<td>" + items[i].partyroom.name + "</td>";
        //myTable += "<td>" + items[i].category.name + "</td>";
        myTable += "<td>" + items[i].client.idClient + "</td>";
        myTable += "<td>" + items[i].client.name + "</td>";
        myTable += "<td>" + items[i].client.email + "</td>";
        myTable += "<td>" + items[i].score.stars + "</td>";
        myTable += "<td>" + items[i].score.messageText + "</td>";

        // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoReservation").append(myTable);
}


function guardarInformacionScore() {

    $("#resultadoScore").empty();

    let myData = { messageText: $("#mensajeR").val(), stars: $("#calificacion").val(), reservation: { idReservation: $("#idReservacion").val() } }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'http://localhost:8080/api/Score/save',
            type: 'POST',
            data: dataToSend,
            datatype: "JSON",
            contentType: 'application/json',
            success: function (respuesta) {
                console.log(respuesta);
                alert("Inserción exitosa");
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            }

        }
    );
}

///

function guardarInformacionAdmin() {

    $("#resultadoAdmin").empty();

    let myData = { name: $("#nameAdmin").val(), email: $("#emailAdmin").val(), password: $("#passwordAdmin").val() }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'http://localhost:8080/api/Admin/save',
            type: 'POST',
            data: dataToSend,
            datatype: "JSON",
            contentType: 'application/json',
            success: function (respuesta) {
                console.log(respuesta);
                alert("Inserción exitosa");
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            }

        }
    );
}

function traerInformacionAdmin() {
    $.ajax(
        {
            url: "http://localhost:8080/api/Admin/all",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                pintarRespuestaAdmin(respuesta);
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            }


        }

    );
}


function pintarRespuestaAdmin(items) {

    $("#resultadoAdmin").empty();


    let myTable = "<table>";
    myTable += "<tr><th>Codigo Admin</th><th> Nombre Admin</th><th>Email Admin</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].idAdmin + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";

        // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoAdmin").append(myTable);
}

function traerInformacionScore() {
    $.ajax(
        {
            url: "http://localhost:8080/api/Score/all",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                pintarRespuestaScore(respuesta);
            },
            error: function (xhr, status) {
                alert('Operacion no satisfactoria,' + xhr.status);
            }


        }

    );
}


function pintarRespuestaScore(items) {

    $("#resultadoScore").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Codigo Res</th><th> Fecha Inicio</th><th>Fecha fin</th><th>Status</th><th>Codigo Partyroom</th><th>Nombre Partyroom</th><th>Codigo Cliente</th><th>Nombre Cliente</th><th>Calificacion</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].reservation.idReservation + "</td>";
        myTable += "<td>" + items[i].reservation.startDate + "</td>";
        myTable += "<td>" + items[i].reservation.devolutionDate + "</td>";
        myTable += "<td>" + items[i].reservation.status + "</td>";
        myTable += "<td>" + items[i].reservation.partyroom.idPartyroom + "</td>";
        myTable += "<td>" + items[i].reservation.partyroom.name + "</td>";
        myTable += "<td>" + items[i].reservation.client.idClient + "</td>";
        myTable += "<td>" + items[i].reservation.client.name + "</td>";
        // myTable += "<td>" + items[i].stars + "</td>";

        // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoScore").append(myTable);
}
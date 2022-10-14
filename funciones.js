// ContentType: Cuando envíe datos al servidor, use este tipo de contenido. El valor predeterminado es application/x-www-form-urlencoded; charset=UTF-8, lo cual está bien para la mayoría de los casos.
// DataType: El tipo de datos que espera del servidor. Si no se especifica ninguno, jQuery intentará inferirlo en función del tipo MIME de la respuesta. Puede ser text, xml, html, script, json, jsonp.

function guardarInformacionCategory() {

    $("#resultadoCategory").empty();

    let myData = { name: $("#nombreCategory").val(), description: $("#descripcionCategory").val() }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'http://129.158.213.90/api/Category/save',
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


function traerInformacionCategory() {
    $.ajax(
        {
            url: "http://129.158.213.90/api/Category/all",
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

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Codigo</th><th>Nombre</th><th>Descripcion</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        // myTable+="<td><button onclick='borrarCategoria("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoCategory").append(myTable);
}




function traerInformacionPartyroom() {
    $.ajax(
        {
            url: "http://129.158.213.90/api/Partyroom/all",
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

// [{"id":1,"name":"Salon para viejoteca","owner":"BestParties sas","capacity":200,
// "description":"Salon para viejoteca",
// :"category":{"id":1,"name":"cat1","description":"test category"},
//"messages":[],"reservations":[]}]

function pintarRespuestaPartyroom(items) {

    $("#resultado").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Codigo</th><th>Nombre</th><th>Dueño</th><th>Capacidad</th><th>Descripcion</th><th>Codigo Categoria</th><th>Nombre Categoria</th><th>Descripcion Categoria</th><th>Mensajes</th><th>Reservas</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";

        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].owner + "</td>";
        myTable += "<td>" + items[i].capacity + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        myTable += "<td>" + items[i].category.id + "</td>";
        myTable += "<td>" + items[i].category.name + "</td>";
        myTable += "<td>" + items[i].category.description + "</td>";
        myTable += "<td>" + items[i].messages + "</td>";
        myTable += "<td>" + items[i].reservations + "</td>";
        // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
}


//{"brand":"GW","year":2013,"category":{"id":1},"name":"Gw shimano 25","description":"Gw shimano 25"}
function guardarInformacionPartyroom() {

    $("#resultado").empty();

    let myData = { owner: $("#ownerPartyroom").val(), capacity: $("#capacityPartyroom").val(), category: { id: $("#idCategory").val() }, name: $("#namePartyroom").val(), description: $("#descriptionPartyroom").val() }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'http://129.158.213.90/api/Partyroom/save',
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



function guardarInformacionClient() {

    $("#resultadoClient").empty();

    let myData = { name: $("#nameClient").val(), email: $("#emailClient").val(), password: $("#passwordClient").val(), age: $("#ageClient").val() }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'http://129.158.213.90/api/Client/save',
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
            url: "http://129.158.213.90/api/Client/all",
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


function pintarRespuestaClient(items) {

    $("#resultadoClient").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Codigo</th><th> Correo</th><th>Password</th><th>Nombre</th><th>Edad</th><th>Mensajes</th><th>Reservaciones</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].idClient + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].password + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td>" + items[i].messages + "</td>";
        myTable += "<td>" + items[i].reservations + "</td>";
        // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoClient").append(myTable);
}


function guardarInformacionMessage() {

    $("#resultadoMessage").empty();

    let myData = { messageText: $("#messageM").val(), client: { idClient: $("#idClientM").val() }, partyroom: { id: $("#idPartyroomM").val() } }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'http://129.158.213.90/api/Message/save',
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

function traerInformacionMessage() {
    $.ajax(
        {
            url: "http://129.158.213.90/api/Message/all",
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


// [{"idMessage":1,"messageText":"Me gusta.",
// "partyroom":{"id":1,"name":"Salon para viejoteca","owner":"BestParties sas","capacity":200,"description":"Salon para viejoteca",
//"category":{"id":1,"name":"cat1","description":"test category"}},
// "client":{"idClient":1,"email":"agustin@gmail.com","password":"agustin123","name":"Agustin Parra","age":18}}]




function pintarRespuestaMessage(items) {

    $("#resultadoMessage").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Codigo</th><th> Mensaje</th><th>Codigo Partyroom</th><th>Nombre Partyroom</th><th>Capacidad Partyroom</th><th>Dueño Partyroom</th><th>Descripcion Partyroom</th><th>Codigo Categoria</th><th>Nombre Categoria</th><th>Descripcion Categoria</th><th>Codigo Cliente</th><th>Nombre Cliente</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].idMessage + "</td>";
        myTable += "<td>" + items[i].messageText + "</td>";
        myTable += "<td>" + items[i].partyroom.id + "</td>";
        myTable += "<td>" + items[i].partyroom.name + "</td>";
        myTable += "<td>" + items[i].partyroom.owner + "</td>";
        myTable += "<td>" + items[i].partyroom.capacity + "</td>";
        myTable += "<td>" + items[i].partyroom.description + "</td>";
        myTable += "<td>" + items[i].category.id + "</td>";
        myTable += "<td>" + items[i].category.name + "</td>";
        myTable += "<td>" + items[i].category.description + "</td>";
        myTable += "<td>" + items[i].client.idClient + "</td>";
        myTable += "<td>" + items[i].client.email + "</td>";
        myTable += "<td>" + items[i].client.password + "</td>";
        myTable += "<td>" + items[i].client.name + "</td>";
        myTable += "<td>" + items[i].client.age + "</td>";

        // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoMessage").append(myTable);
}

// {"startDate":"2020-12-20","devolutionDate":"2020-12-20",
// "client":{"idClient":1},"partyroom":{"id":1}}

function guardarInformacionReservation() {

    $("#resultadoReservation").empty();

    let myData = { startDate: $("#dateInitial").val(), devolutionDate: $("#dateFinal").val(), client: { idClient: $("#idClientR").val() }, partyroom: { id: $("#idPartyroomR").val() } }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'http://129.158.213.90/api/Reservation/save',
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
            url: "http://129.158.213.90/api/Reservation/all",
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


// [{"idReservation":1,"startDate":"2020-12-20T00:00:00.000+00:00","devolutionDate":"2020-12-20T00:00:00.000+00:00",
//"status":"created",
//"partyroom":{"id":1,"name":"Salon para viejoteca","owner":"BestParties sas","capacity":200,"description":"Salon para viejoteca",
//"category":{"id":1,"name":"cat1","description":"test category"},
//"messages":[{"idMessage":1,"messageText":"Me gusta."}]},
//"client":{"idClient":1,"email":"agustin@gmail.com","password":"agustin123","name":"Agustin Parra","age":18},
//"score":null}]

function pintarRespuestaReservation(items) {

    $("#resultadoReservation").empty();

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Codigo Reserva</th><th> Fecha Inicio</th><th>Fecha fin</th><th>Status</th><th>Codigo Partyroom</th><th>Nombre Partyroom</th><th>Dueño Partyroom</th><th>Capacidad Partyroom</th><th>Descripcion Partyroom</th><th>Codigo Categoria</th><th>Nombre Categoria</th><th>Descripcion Categoria</th><th>Codigo Mensaje</th><th>Mensaje</th><th>Codigo Cliente</th><th>Correo Cliente</th><th>Password Cliente</th><th>Nombre Cliente</th><th>Edad Cliente</th><th>Calificacion</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].idReservation + "</td>";
        myTable += "<td>" + items[i].startDate + "</td>";
        myTable += "<td>" + items[i].devolutionDate + "</td>";
        myTable += "<td>" + items[i].status + "</td>";
        myTable += "<td>" + items[i].partyroom.id + "</td>";
        myTable += "<td>" + items[i].partyroom.name + "</td>";
        myTable += "<td>" + items[i].partyroom.owner + "</td>";
        myTable += "<td>" + items[i].partyroom.capacity + "</td>";
        myTable += "<td>" + items[i].partyroom.description + "</td>";
        myTable += "<td>" + items[i].category.id + "</td>";
        myTable += "<td>" + items[i].category.name + "</td>";
        myTable += "<td>" + items[i].category.description + "</td>";
        myTable += "<td>" + items[i].messages.id + "</td>";
        myTable += "<td>" + items[i].messages.messageText + "</td>";
        myTable += "<td>" + items[i].client.idClient + "</td>";
        myTable += "<td>" + items[i].client.email + "</td>";
        myTable += "<td>" + items[i].client.password + "</td>";
        myTable += "<td>" + items[i].client.name + "</td>";
        myTable += "<td>" + items[i].client.age + "</td>";
        myTable += "<td>" + items[i].score.stars + "</td>";

        // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoReservation").append(myTable);
}
///
function guardarInformacionScore() {

    $("#resultadoScore").empty();

    let myData = { messageText: $("#mensaje").val(), stars: $("#calificacion").val(), reservation: { idReservation: $("#idReservationS").val() } }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'http://129.158.213.90/api/Score/save',
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

    let myData = { name: $("#nameAdmin").val(), email: $("#emailAdmin").val(), password: $("#passwordAmin").val() }
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {

            url: 'http://129.158.213.90/api/Admin/save',
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
            url: "http://129.158.213.90/api/Admin/all",
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

    //declarar variables js
    let myTable = "<table>";
    myTable += "<tr><th>Codigo Admin</th><th> Nombre Admin</th><th>Email Admin</th></tr>";
    //<th>Password Admin</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].idAdmin + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].password + "</td>";

        // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoAdmin").append(myTable);
}


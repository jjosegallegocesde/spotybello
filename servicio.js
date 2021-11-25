//PASOS PARA CONSUMIR UN API UTILIZANDO JS

//1. Definir la URL del servicio a consumir
let uri = "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi/top-tracks?market=US"

//2. Si tengo tokens o datos de control los almaceno en variables separadas
let token = "Bearer BQC3Mbl-YDlK1a_-jYjktsfJUdxNzGUYQd5sDu8Z06JsOAxH6ziEi5ZcOVLIXI6guSenbgMrSqPm9z2_L6IHXFqsea4CpY19RXG4NIpN22LaZQ-TRRq5cVULP7SMjBqSKbfqfgRJ3yrAxo0D3JY"

//3. Configurar los parametros de envio de la peticion
// METHOD (metodos HTTP SEGUN LA PETICION)
// HEADERS (CABECERAS)
// BODY (CUERPO)
let parametros = {
    method: "GET",
    headers: {
        Authorization: token
    }
}

//4.CONSUMIR EL API
//Yo FETCH te prometo ir a la uri con los parametros que me diste y tarerte datos del servidor (consumir el api)
fetch(uri, parametros)
    .then(function (respuesta) {
        //Que hago si tengo una respuesta del servidor....
        //1. VERIFICAR QUE LA RESPUESTA ESTE EN FORMATO JSON
        return respuesta.json()
    })
    .then(function (respuesta) {
        //2. Defino que hacer con la respeusta que me llega
        console.log(respuesta)
    })
    .catch(function (error) {
        console.log(error)
    })

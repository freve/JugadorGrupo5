
const API_URL = "http://localhost:8081/equipo"
const API_URL_JUGADOR = "http://localhost:8082/jugador"
const API_URL_JUGADOR_EQUIPO = "http://localhost:8082/jugador/listar/"
const API_URL_FICHA_JUGADOR = "http://localhost:8082/jugador/save/1"
export function get() {
    return fetch(API_URL, {
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((response) => response.json())
}
export function getJugadores() {
    return fetch(API_URL_JUGADOR, {
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((response) => response.json())
}
export function getJugadoresEquipo(idequipo) {
    return fetch(API_URL_JUGADOR_EQUIPO + idequipo, {
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((response) => response.json())
}
export function crearFicha(data) {
    
    return fetch(API_URL_FICHA_JUGADOR, {
        method: 'POST',
        body: data
    })
        .then(function (response) {
            if (response.ok) {
                return response.json()
            } else {
                throw "Error en la llamada Ajax";
            }

        })
        .catch(function (err) {
            console.log(err);
        });
}
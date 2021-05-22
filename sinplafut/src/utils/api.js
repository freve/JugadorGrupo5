
const API_URL = "http://localhost:8081/equipo"
const API_URL_JUGADOR = "http://localhost:8082/jugador"
export function get()
{
    return fetch(API_URL, {
        headers:{
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((response) => response.json())
}
 export function getJugadores()
{
    return fetch(API_URL_JUGADOR, {
        headers:{
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((response) => response.json())
}
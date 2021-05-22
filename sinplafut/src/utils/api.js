
const API_URL = "http://localhost:8081/equipo"
export function get()
{
    return fetch(API_URL, {
        headers:{
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((response) => response.json())
}
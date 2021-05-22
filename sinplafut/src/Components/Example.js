import { get } from '../utils/api'
import { useEffect } from "react";
export function Example() {
    useEffect(() => {
        const HTMLResponse = document.querySelector("#App");
        const ul = document.createElement('ul');
        get().then(equipo => {
            equipo.forEach((data) => {
                let elem = document.createElement('li');
                elem.appendChild(
                    document.createTextNode(`${data.nombre}`)
                );
                ul.appendChild(elem);
            });
            HTMLResponse.appendChild(ul);
        })
    }, [])

    return (
        <div id="App">
        
        </div>
    )
}

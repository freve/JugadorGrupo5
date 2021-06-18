import styles from './ListDataSheet.module.css'
import { useState,useEffect } from 'react'
export function ListTeam() {
    const [equipos, setEquipos] = useState([]);

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        const data = await fetch("http://localhost:8081/equipo");
        const equiposJson = await data.json();
        console.log(equiposJson);
        setEquipos(equiposJson);
    };

    const rutaBaseImg = "http://localhost:8081/uploads/";

    const eliminarEquipo = async (id) => {
        console.log(id);
        const url = "http://localhost:8081/equipo/" + id;
        const response = await fetch(url, { method: "DELETE" });
        const responseJson = await response.json();
        console.log(responseJson);
        const nuevaLista = equipos.filter((item) => item.id !== id);
        setEquipos(nuevaLista);
    };
    return (
        <div className={styles.container}>

            <div className={styles.section_table}>
                <div className={styles.container_table}>
                    <h3 className={styles.title}>Jugadores</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Escudo</th>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Ciudad</th>
                                <th>Categoria</th>
                                <th>Telefono</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="body">
                            {
                                equipos.map((data) => (
                                    <tr key={data.id}>
                                        <td>
                                            <img src={rutaBaseImg + data.escudo}
                                                width="50px"
                                                alt="escudo" />
                                        </td>
                                        <td>
                                            <h5> {data.nombre} </h5>
                                        </td>
                                        <td>
                                            <h5> {data.direccion} </h5>
                                        </td>
                                        <td>
                                            <h5> {data.ciudad} </h5>
                                        </td>
                                        <td>
                                            <h5> {data.categoria.nombre} </h5>
                                        </td>
                                        <td>
                                            <h5> {data.telefono} </h5>
                                        </td>
                                        <td>
                                            <div className={styles.td_accion}>
                                                <button title="Editar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                    </svg>
                                                </button>
                                                <button title="Eliminar" onClick={() => eliminarEquipo(data.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

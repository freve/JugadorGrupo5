import styles from './ListDataSheet.module.css'
import { getJugadoresEquipo } from '../utils/api'
import { useState } from 'react'
export function ListDataSheet() {
    const [idEquipo, setIdEquipo] = useState(0);
    const [jugadores, setJugadores] = useState([]);

    const onChange = (e) => {
        setIdEquipo(e.target.value)
    }

    const listar = (e) => {
        e.preventDefault()
        getJugadoresEquipo(idEquipo).then(data => data === undefined ? setJugadores([]) : setJugadores(data))
    }

    return (
        <div className={styles.container}>
            <form onSubmit={listar} >
                <label className={styles.label} htmlFor="team">Equipo</label>
                <div className={styles.divipt}>
                    <input onChange={onChange} className={styles.ipt} id="team" name="idEquipo" type="number" />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </form>

            <div className={styles.section_table}>
                <div className={styles.container_table}>
                    <h3 className={styles.title}>Jugadores</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="body">
                            {
                                jugadores.map((data, key) => (
                                    <tr key={key}>
                                        <td>
                                            <h5> {data.nombre} {data.apellido} </h5>
                                        </td>
                                        <td>
                                            <h5> {data.correo} </h5>
                                        </td>
                                        <td>
                                            <div className={styles.td_accion}>
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
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

import styles from './Form.module.css'
import { crearFicha } from '../utils/api'
import { useState } from 'react'
export function Form() {
    const [form, setForm] = useState({
        apellido: '',
        correo: '',
        direccion: '',
        estado: '',
        fechaNacimiento: '',
        nombre: '',
        telefono: '',
        tipoSangre: '',
        hemoglobina: '',
        consumo: '',
        tallaCamisa: '',
        tallaPantaloneta: '',
        tallaZapato: ''
    })

    const [idEquipo, setIdEquipo] = useState(null)

    const onChangeId = (e) => {
        setIdEquipo(e.target.value)
    }
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const enviarDatos = (e) => {
        e.preventDefault()
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }
        crearFicha(idEquipo, config).then(jug => { 
            jug !== undefined ? alert(`Jugador ${jug.jugador.nombre} registrado correctamente`) : console.log(jug)
            window.location.replace('/');
         })
        
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Datos personales</h3>
            <div className={styles.container_form}>
                <div className={styles.container_grid}>
                    <form onSubmit={enviarDatos} id="register">
                        <div className={styles.form}>
                            <div className={styles.grid_form}>
                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="firstname">Nombres</label>
                                    <input onChange={onChange}
                                        className={styles.ipt} id="firstname" name="nombre" type="text" required />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="lastname">Apellidos</label>
                                    <input onChange={onChange} className={styles.ipt} id="lastname" name="apellido" type="text" required />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="fnac">Fecha de nacimiento</label>
                                    <input onChange={onChange} className={styles.ipt} id="fnac" name="fechaNacimiento" type="date" required />
                                </div>

                                {/* <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="doc">Documento</label>
                                    <input className={styles.ipt} id="doc" name="doc" type="number" required />
                                </div> */}

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="tel">Telefono</label>
                                    <input onChange={onChange} className={styles.ipt} id="tel" name="telefono" type="tel" required />
                                </div>

                                {/* <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="cel">Celular</label>
                                    <input className={styles.ipt} id="cel" name="cel" type="tel" required />
                                </div> */}

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="dir">Direccion</label>
                                    <input onChange={onChange} className={styles.ipt} id="dir" name="direccion" type="text" required />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="email">Correo</label>
                                    <input onChange={onChange} className={styles.ipt} id="email" name="correo" type="email" autoComplete="email" required />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="pase">Equipo</label>
                                    <input onChange={onChangeId} className={styles.ipt} id="pase" name="equipo" type="number" required />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="cat">Estado</label>
                                    <select onChange={onChange} id="cat" name="estado" className={styles.ipt}>
                                        <option value="0"></option>
                                        <option value="1">Lesionado</option>
                                        <option value="2">Activo</option>
                                        <option value="3">Inactivo</option>
                                        <option value="4">Retiro</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            <h3 className={styles.title}>Tallas Indumentaria</h3>
            <div className={styles.container_form}>
                <div className={styles.container_grid}>
                    <div>
                        <div className={styles.form}>
                            <div className={styles.grid_form}>
                                {/* <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="sudadera">Sudadera</label>
                                    <select form="register" id="sudadera" name="tallaCamisa" className={styles.ipt}>
                                        <option value="1">XS</option>
                                        <option value="2">S</option>
                                        <option value="3">M</option>
                                        <option value="4">L</option>
                                        <option value="5">XL</option>
                                    </select>
                                </div> */}

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="camiseta">Camiseta</label>
                                    <select onChange={onChange} form="register" id="camiseta" name="tallaCamisa" className={styles.ipt}>
                                        <option value="0"></option>
                                        <option value="1">XS</option>
                                        <option value="2">S</option>
                                        <option value="3">M</option>
                                        <option value="4">L</option>
                                        <option value="5">XL</option>
                                    </select>
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="pantaloneta">Pantaloneta</label>
                                    <select onChange={onChange} form="register" id="pantaloneta" name="tallaPantaloneta" className={styles.ipt}>
                                        <option value="0"></option>
                                        <option value="1">XS</option>
                                        <option value="2">S</option>
                                        <option value="3">M</option>
                                        <option value="4">L</option>
                                        <option value="5">XL</option>
                                    </select>
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="zapato">Zapato deportivo (EU)</label>
                                    <input onChange={onChange} form="register" className={styles.ipt} id="zapato" name="tallaZapato" type="number" placeholder="38" required />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <h3 className={styles.title}>Informacion sanguinea</h3>
            <div className={styles.container_form}>
                <div className={styles.container_grid}>
                    <div>
                        <div className={styles.form}>
                            <div className={styles.grid_form}>
                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="ts">Tipo de sangre</label>
                                    <select onChange={onChange} form="register" id="ts" name="tipoSangre" className={styles.ipt}>
                                        <option value="0"></option>
                                        <option value="1">O-</option>
                                        <option value="2">O+</option>
                                        <option value="3">A-</option>
                                        <option value="4">A+</option>
                                        <option value="5">B-</option>
                                        <option value="6">B+</option>
                                        <option value="7">AB-</option>
                                        <option value="8">AB+</option>
                                    </select>
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="nh">Nivel de hemoglobina</label>
                                    <input onChange={onChange} form="register" className={styles.ipt} id="nh" name="hemoglobina" type="number" required />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="co">Consumo de oxigeno</label>
                                    <input onChange={onChange} form="register" className={styles.ipt} id="co" name="consumo" type="number" required />
                                </div>

                                {/* <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="nls">Nivel de lactato en la sangre</label>
                                    <input form="register" className={styles.ipt} id="nls" name="nls" type="number" required />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button form="register" className={styles.btn_Create}>Crear</button>
        </div>
    )
}

import styles from './Form.module.css'
export function Form() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Datos personales</h3>
            <div className={styles.container_form}>
                <div className={styles.container_grid}>
                    <form>
                        <div className={styles.form}>
                            <div className={styles.grid_form}>
                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="firstname">Nombres</label>
                                    <input className={styles.ipt} id="firstname" name="firstname" type="text" />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="lastname">Apellidos</label>
                                    <input className={styles.ipt} id="lastname" name="lastname" type="text"/>
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="fnac">Fecha de nacimiento</label>
                                    <input className={styles.ipt} id="fnac" name="fnac" type="date" />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="doc">Documento</label>
                                    <input className={styles.ipt} id="doc" name="doc" type="number" />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="tel">Telefono</label>
                                    <input className={styles.ipt} id="tel" name="tel" type="tel"  />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="cel">Celular</label>
                                    <input className={styles.ipt} id="cel" name="cel" type="tel" />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="dir">Direccion</label>
                                    <input className={styles.ipt} id="dir" name="dir" type="text" />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="email">Correo</label>
                                    <input className={styles.ipt} id="email" name="email" type="email" />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="pase">Pase</label>
                                    <input className={styles.ipt} id="pase" name="pase" type="text" />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="cat">Categoria</label>
                                    <select id="cat" className={styles.ipt}>
                                        <option value="1">Sub 20</option>
                                        <option value="2">Sub 17</option>
                                        <option value="3">Sub 15</option>
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
                    <form>
                        <div className={styles.form}>
                            <div className={styles.grid_form}>
                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="sudadera">Sudadera</label>
                                    <select id="sudadera" className={styles.ipt}>
                                        <option value="1">XS</option>
                                        <option value="2">S</option>
                                        <option value="3">M</option>
                                        <option value="4">L</option>
                                        <option value="5">XL</option>
                                    </select>
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="camiseta">Camiseta</label>
                                    <select id="camiseta" className={styles.ipt}>
                                        <option value="1">XS</option>
                                        <option value="2">S</option>
                                        <option value="3">M</option>
                                        <option value="4">L</option>
                                        <option value="5">XL</option>
                                    </select>
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="pantaloneta">Pantaloneta</label>
                                    <select id="pantaloneta" className={styles.ipt}>
                                        <option value="1">XS</option>
                                        <option value="2">S</option>
                                        <option value="3">M</option>
                                        <option value="4">L</option>
                                        <option value="5">XL</option>
                                    </select>
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="zapato">Zapato deportivo (EU)</label>
                                    <input className={styles.ipt} id="zapato" name="zapato" type="number" placeholder="38" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            <h3 className={styles.title}>Informacion sanguinea</h3>
            <div className={styles.container_form}>
                <div className={styles.container_grid}>
                    <form>
                        <div className={styles.form}>
                            <div className={styles.grid_form}>
                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="ts">Tipo de sangre</label>
                                    <select id="ts" className={styles.ipt}>
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
                                    <input className={styles.ipt} id="nh" name="nh" type="number"  />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="co">Consumo de oxigeno</label>
                                    <input className={styles.ipt} id="co" name="co" type="number"  />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="nls">Nivel de lactato en la sangre</label>
                                    <input className={styles.ipt} id="nls" name="nls" type="number" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <button className={styles.btn_Create}>Crear</button>
        </div>
    )
}

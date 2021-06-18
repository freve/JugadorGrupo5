import styles from './Form.module.css'
export function FormTeam() {
    const enviarForm = (e) => {

        e.preventDefault();
        var dataForm = new FormData(document.forms.namedItem("formulario"));

        var req = new XMLHttpRequest();
        req.open("POST", "http://localhost:8081/equipo/save/1", true);

        req.onload = function (oEvent) {
            if (req.status === 201) {
                window.location.replace("/equipo");
                console.log(req.response);
            } else {
                console.log("Status:" + req.status + "Error : " + req.response);
            }
        };
        req.send(dataForm);

    };
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Registrar Equipo</h3>
            <div className={styles.container_form}>
                <div className={styles.container_grid}>
                    <form encType="multipart/form-data"
                        onSubmit={enviarForm}
                        method="POST"
                        name="formulario" id="register">
                        <div className={styles.form}>
                            <div className={styles.grid_form}>
                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="name">Nombre</label>
                                    <input
                                        className={styles.ipt} id="name" name="nombre" type="text" required />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="tel">Telefono</label>
                                    <input className={styles.ipt} id="tel" name="telefono" type="number" required />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="dir">Direccion</label>
                                    <input className={styles.ipt} id="dir" name="direccion" type="text" required />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="ciudad">Ciudad</label>
                                    <input className={styles.ipt} id="ciudad" name="ciudad" type="text" required />
                                </div>

                                <div className={styles.col_3_6}>
                                    <label className={styles.label} htmlFor="imagen">Escudo</label>
                                    <input className={styles.ipt} id="imagen" name="imagen" accept="image/*" type="file" required />
                                </div>
                            </div>
                            <input type="hidden" value="1" name="idClub" />
                            <input type="hidden" value="1" name="idCuerpoTecnico" />
                        </div>
                    </form>
                </div>
            </div>
            <button form="register" className={styles.btn_Create}>Crear</button>
        </div>
    )
}

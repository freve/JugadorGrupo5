import styles from './Form.module.css'
export function Category() {
    const enviarForm = (e) => {

        e.preventDefault();
        var dataForm = new FormData(document.forms.namedItem("formulario"));

        var req = new XMLHttpRequest();
        req.open("POST", "http://localhost:8081/categoria/save", true);

        req.onload = function (oEvent) {
            if (req.status === 201) {
                window.location.replace("/categoria");
                console.log(req.response);
            } else {
                console.log("Status:" + req.status + "Error : " + req.response);
            }
        };
        req.send(dataForm);

    };
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Registrar Categoria</h3>
            <div className={styles.container_form}>
                <div className={styles.container_grid}>
                    <form
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
                                    <label className={styles.label} htmlFor="descripcion">Descripcion</label>
                                    <input className={styles.ipt} id="descripcion" name="descripcion" type="text" required />
                                </div>

                            </div>
                        
                        </div>
                    </form>
                </div>
            </div>
            <button form="register" className={styles.btn_Create}>Crear</button>
        </div>
    )
}

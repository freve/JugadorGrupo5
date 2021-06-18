import styles from './Form.module.css'
import * as FormData from "form-data";
export function Category() {
    const enviarForm2 = (e) => {

        e.preventDefault();
        
        var data = {
            "nombre": document.getElementById("name").value,
            "descripcion": document.getElementById("descripcion").value
        }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://localhost:8081/categoria/save', true);

        //Send the proper header information along with the request
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onreadystatechange = function () { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
                // Request finished. Do processing here.
                window.location.replace("/categoria");
                console.log(xhr.response);
            } else {
                console.log("Status:" + xhr.status + "Error : " + xhr.response);
            }
        }
        xhr.send(JSON.stringify(data));

    };
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Registrar Categoria</h3>
            <div className={styles.container_form}>
                <div className={styles.container_grid}>
                    <form
                        onSubmit={enviarForm2}
                        method="POST"
                        name="formulario2" id="register2">
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
            <button form="register2" className={styles.btn_Create}>Crear</button>
        </div>
    )
}

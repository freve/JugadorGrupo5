import React, { useState } from "react";
import "./Modal.css";
import styles from './ListDataSheet.module.css'
import { Lesiones } from '../utils/api'
export function Modal(props) {
  const [modal, setModal] = useState(false);
  const [lesiones, setLesiones] = useState([]);
  const toggleModal = (idjug) => {
    setModal(!modal);
    Lesiones(idjug).then(data => data === undefined ? setLesiones([]) : setLesiones(data))
  };

  const toggleModal2 = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button title="Lesiones" onClick={() => toggleModal(props.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
      </button>
      {modal && (
        <div className="modal">
          <div onClick={() => toggleModal2()} className="overlay"></div>
          <div className="modal-content">
            <div className={styles.section_table}>
              <div className={styles.container_table}>
                <h3 className={styles.title}>Lesiones</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Fecha Inicio</th>
                      <th>Fecha Fin</th>
                      <th>Observaciones</th>
                      <th>Tratamiento</th>
                    </tr>
                  </thead>
                  <tbody id="body">
                    {
                      lesiones.map((data) => (
                        <tr key={data.id}>
                          <td>
                            <h5> {data.fechaInicio}  </h5>
                          </td>
                          <td>
                            <h5> {data.fechaFin} </h5>
                          </td>
                          <td>
                            <h5> {data.observaciones} </h5>
                          </td>
                          <td>
                            <h5> {data.tratamiento} </h5>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <button className="close-modal" onClick={() => toggleModal2()}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
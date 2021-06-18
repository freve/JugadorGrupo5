import logo from '../img/logo.png'
import styles from './Navbar.module.css'
import { Link } from "react-router-dom"
export function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.container_logo}>
                <img className={styles.logo} src={logo} alt=" " />
                <h3 className={styles.title_logo}>FC BARCELONA</h3>
            </div>
            <div className={styles.icon_menu}>
                <button className={styles.btn_menu}>
                    <svg className={styles.svg_menu} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div id="menu" className={styles.menu}>
                <ul className={styles.menu_ul}>
                    <li className={styles.menu_item}>Jugador
                        <ul className={styles.submenu_ul}>
                            <Link to="/" className={styles.submenu_item}>
                                Crear Ficha
                            </Link>
                            <Link to="/ficha/listar" className={styles.submenu_item}>
                                Listar por equipo
                            </Link>
                        </ul>
                    </li>

                    <li className={styles.menu_item}>Equipo
                        <ul className={styles.submenu_ul}>
                            <Link to="/equipo" className={styles.submenu_item}>
                                Crear
                            </Link>
                            <Link to="/equipo/listar" className={styles.submenu_item}>
                                Listar
                            </Link>
                        </ul>
                    </li>

                    <li className={styles.menu_item}>
                        Categoria
                        <ul className={styles.submenu_ul}>
                            <Link to="/categoria" className={styles.submenu_item}>
                                Crear
                            </Link>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

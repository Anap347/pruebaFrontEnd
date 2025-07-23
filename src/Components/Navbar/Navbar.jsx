import React from 'react';
import logoGS from '../../assets/grupo-salinas-logo.png'
import styles from './navbarDesign.module.css';
import '../../index.css'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { IoExitOutline } from "react-icons/io5";

const Navbar = () => {
    const MySwal = withReactContent(Swal);

    const handleExit = () => {
        MySwal.fire({
            text: "Estimado Socio se te informa que no podrás solicitar plan o cita si no finalizas el cuestionario.",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Continuar",
            cancelButtonText: "Salir",
            color: "#000",
            background: "#FFFFFF",
            confirmButtonColor: "#FFD61B",
            icon: "success",
            iconColor: "#FFD61B",
            customClass: {
                icon: 'alert_icon',
                confirmButton: 'alert_confirm',
                cancelButton: 'alert_cancel',
                htmlContainer: 'alert_text'
              },
        })
    }

    return (
        <header className={styles.navbar}>
            <img src={logoGS} alt="Grupo Salinas Logo" className={styles.logo} />
            <p className={styles.text}>Nutrición</p>
            <div className={styles.button_container}>
                <button className={styles.button_exit} onClick={handleExit}>Salir</button>
                <IoExitOutline className={styles.button_exit_icon} />
            </div>
        </header>
    )
}

export default Navbar
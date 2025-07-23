import React, { useState, useEffect } from "react";
import styles from './registerDesign.module.css';
import picture from '../../assets/profile-picture.jpeg'
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BsCake } from "react-icons/bs";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { ButtonYellow } from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        nameUser: 'Oscar Adan Reyes Lozada',
        email: 'osadan12@gmail.com',
        workplace: 'Mega Serviplaza El Rosario Cdmx',
        age: '38',
        cellphone: '5555303675',
    })

    useEffect(() => {
        const storedUser = localStorage.getItem('welcomeUserData');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const changeInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.cellphone.match('[0-9]{10,}')) {
            alert('Número de teléfono no valido, captura el número sin espacios')
            return;
        }
        localStorage.setItem('welcomeUserData', JSON.stringify(user));
        navigate('/nutricion')
    }

    return (
        <>
            <section className={styles.user_profile}>
                <img src={picture} alt="" className={styles.profile_picture} />
                <div className={styles.welcome_user_name}>
                    <p className={styles.welcome_text}>¡Bienvenida</p>
                    <h1>{user.nameUser.split(' ').slice(0, 2).join(' ')}!</h1>
                </div>
            </section>
            <p className={styles.form_header}>Para comenzar, ayúdanos a verificar tus datos.</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <div className={styles.container_input}>
                        <label className={styles.form_label} htmlFor="name"><CiUser /> Nombre</label>
                        <input className={styles.form_input} type="text" name="nameUser" value={user.nameUser} onChange={changeInput} required />
                    </div>
                    <div className={styles.container_input}>
                        <label className={styles.form_label} htmlFor="email"><MdOutlineEmail /> Correo eléctronico</label>
                        <input className={styles.form_input} type="email" name="email" value={user.email} onChange={changeInput} required />
                    </div>
                    <div className={styles.container_input}>
                        <label className={styles.form_label} htmlFor="workplace"><CiLocationOn /> Lugar de trabajo</label>
                        <input className={styles.form_input} type="text" name="workplace" value={user.workplace} onChange={changeInput} required />
                    </div>
                </div>
                <div>
                    <div className={styles.container_input}>
                        <label className={styles.form_label} htmlFor="age"><BsCake /> Edad</label>
                        <input className={styles.form_input} type="number" name="age" value={user.age} onChange={changeInput} required />
                    </div>
                    <div className={styles.container_input}>
                        <label className={styles.form_label} htmlFor="cellphone"><IoPhonePortraitOutline /> Teléfono celular</label>
                        <input className={styles.form_input} type="tel" name="cellphone" value={user.cellphone} onChange={changeInput} required />
                    </div>
                </div>
                <div className={styles.button_yellow}>
                    <ButtonYellow text={'Continuar'} />
                </div>
            </form>
        </>
    )
}

export default Register
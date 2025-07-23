import React, { useState, useEffect } from 'react';
import styles from './nutricionDesign.module.css';
import user from '../../assets/profile-picture.jpeg'
import Goals from '../Goals/Goals'
import MedicalForm from '../MedicalForm/MedicalForm'
import { TbAppleFilled } from "react-icons/tb";
import { FaHeartbeat } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";

const Nutricion = () => {
  const [selectedIcon, setSelectedIcon] = useState('showGoalsContent')

  return (
    <>
      <section className={styles.header}>
        <img src={user} alt="" className={styles.profile_picture} />
        <div className={styles.nutricion_container}>
          <p>Nutrición</p>
          <h2>Hola, Oscar Adan</h2>
          <p className={styles.nutricion_info}>
            Para brindarte una mejor atención, contesta las siguientes preguntas.
            La información es confidencial y esencial para crear tu perfil y que recibas la mejor atención.
          </p>
        </div>
        <div className={styles.nutricion_icons}>
          <button className={styles.icon} onClick={() => setSelectedIcon('showGoalsContent')}><TbAppleFilled /></button>
          <span className={styles.inter}>• • •</span>
          <button className={styles.icon} onClick={() => setSelectedIcon('showMedicalContent')}><FaHeartbeat /></button>
          <span className={styles.inter}>• • •</span>
          <button className={styles.icon} ><GiFruitBowl /></button>
          <span className={styles.inter}>• • •</span>
          <button className={styles.icon} ><IoTimeOutline /></button>
          <span className={styles.inter}>• • •</span>
          <button className={styles.icon} ><LuCalendarClock /></button>
        </div>
      </section>

      {selectedIcon === 'showGoalsContent' ? (
        <Goals next={() => setSelectedIcon('showMedicalContent')} />
      ) : (<></>)}

      {selectedIcon === 'showMedicalContent' ? (
        <MedicalForm />
      ) : <> </>}
    </>
  )
}

export default Nutricion
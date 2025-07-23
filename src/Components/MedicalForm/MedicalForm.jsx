import React, { useState, useEffect } from 'react';
import styles from './medicalFormDesign.module.css';
import { FaHeartbeat } from "react-icons/fa";
import { IoSaveOutline } from "react-icons/io5";
import { ButtonYellow } from "../Button/Button"

const MedicalForm = () => {
  const [data, setData] = useState({
    enfermedad: '',
    alergia: '',
    cirugia: '',
    dieta: '',
    medicamentos: '',
  });

  useEffect(() => {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setData(parsed);
    }
  }, []);

  const changeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('data', JSON.stringify(data));
  }

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('data', JSON.stringify(data));
    alert('cambios guardados')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.sectionTitle}><FaHeartbeat className={styles.svg} /> Objetivos</h3>
      <div className={styles.section}>
        <div className={styles.input_flex}>
          <label className={styles.form_label}>¿Padeces alguna enfermedad o afeccion medica?</label>
          <div className={styles.container_input}>
            <input className={styles.form_input_radio} type="radio" name="enfermedad" value="si" checked={data.enfermedad === 'si'} onChange={changeInput} /> Sí
            <input className={styles.form_input_radio} type="radio" name="enfermedad" value="no" checked={data.enfermedad === 'no'} onChange={changeInput} /> No
          </div>
          {data.enfermedad === 'si' && (
            <input className={styles.form_input} type="text" name="enfermedadDescripcion" value={data.enfermedadDescripcion} onChange={changeInput} placeholder="Especifique" />
          )}
        </div>
        <div className={styles.input_flex}>
          <label className={styles.form_label}>¿Tienes alguna alergia? </label>
          <div className={styles.container_input}>
            <input className={styles.form_input_radio} type="radio" name="alergia" value="si" checked={data.alergia === 'si'} onChange={changeInput} /> Sí
            <input className={styles.form_input_radio} type="radio" name="alergia" value="no" checked={data.alergia === 'no'} onChange={changeInput} /> No
          </div>
          {data.alergia === 'si' && (
            <input className={styles.form_input} type="text" name="alergiaDescripcion" value={data.alergiaDescripcion} onChange={changeInput} placeholder="Especifique" />
          )}
        </div>
        <div className={styles.input_flex}>
          <label className={styles.form_label}>¿Te han hecho alguna cirugía?</label>
          <div className={styles.container_input}>
            <input className={styles.form_input_radio} type="radio" name="cirugia" value="si" checked={data.cirugia === 'si'} onChange={changeInput} /> Sí
            <input className={styles.form_input_radio} type="radio" name="cirugia" value="no" checked={data.cirugia === 'no'} onChange={changeInput} /> No
          </div>
          {data.cirugia === 'si' && (
            <>
              <input className={styles.form_input} type="text" name="cirugiaDescripcion" value={data.cirugiaDescripcion} onChange={changeInput} placeholder="Especifique" />
              <input className={styles.form_input} type="date" name="fechaCirugia" value={data.fechaCirugia} onChange={changeInput} />
            </>
          )}
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.input_flex}>
          <label className={styles.form_label}>¿Has hecho dieta para bajar de peso?</label>
          <div className={styles.container_input}>
            <input className={styles.form_input_radio} type="radio" name="dieta" value="si" checked={data.dieta === 'si'} onChange={changeInput} /> Sí
            <input className={styles.form_input_radio} type="radio" name="dieta" value="no" checked={data.dieta === 'no'} onChange={changeInput} /> No
          </div>
        </div>
        <div className={styles.input_flex}>
          <label className={styles.form_label}>¿Has tomado medicamentos para bajar de peso?</label>
          <div className={styles.container_input}>
            <input className={styles.form_input_radio} type="radio" name="medicamentos" value="si" checked={data.medicamentos === 'si'} onChange={changeInput} /> Sí
            <input className={styles.form_input_radio} type="radio" name="medicamentos" value="no" checked={data.medicamentos === 'no'} onChange={changeInput} /> No
          </div>
        </div>
        <div className={styles.input_flex}>
          <label className={styles.form_label}>¿Has tomado tratamientos reductivos anteriormente?</label>
          <div className={styles.container_input}>
            <input className={styles.form_input_radio} type="radio" name="tratamientos" value="si" checked={data.tratamientos === 'si'} onChange={changeInput} /> Sí
            <input className={styles.form_input_radio} type="radio" name="tratamientos" value="no" checked={data.tratamientos === 'no'} onChange={changeInput} /> No
          </div>
          {data.tratamientos === 'si' && (
            <>
              <input className={styles.form_input} type="text" name="tratamientosDescripcion" value={data.tratamientosDescripcion} onChange={changeInput} placeholder="Especifique" />
              <input className={styles.form_input} type="text" name="tiempoTratamientos" value={data.tiempoTratamientos} onChange={changeInput} placeholder='Ej. 6 meses' />
            </>
          )}
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.input_flex}>
          <label className={styles.form_label}>¿Utilizas algún suplemento o tomas vitaminas de manera regular?</label>
          <div className={styles.container_input}>
            <input className={styles.form_input_radio} type="radio" name="suplemento" value="si" checked={data.suplemento === 'si'} onChange={changeInput} /> Sí
            <input className={styles.form_input_radio} type="radio" name="suplemento" value="no" checked={data.suplemento === 'no'} onChange={changeInput} /> No
          </div>
          {data.suplemento === 'si' && (
            <input className={styles.form_input} type="text" name="suplemento" value={data.suplementoDescripcion} onChange={changeInput} placeholder="ej. Vitamina B, Proteinas" />
          )}
        </div>
        <div className={styles.input_flex}>
          <label className={styles.form_label}>¿Te has realizado estudios médicos recientes?</label>
          <div className={styles.container_input}>
            <input className={styles.form_input_radio} type="radio" name="estudios" value="si" checked={data.estudios === 'si'} onChange={changeInput} /> Sí
            <input className={styles.form_input_radio} type="radio" name="estudios" value="no" checked={data.estudios === 'no'} onChange={changeInput} /> No
          </div>
          {data.estudios === 'si' && (
            <input className={styles.form_input} type="text" name="estudiosDescripcion" value={data.estudiosDescripcion} onChange={changeInput} placeholder="ej. Química Sanguinea, Hemoglobina, etc." />
          )}
        </div>
      </div>
      <div className={styles.button_yellow}>
        <div>
          <p>Deseo continuar despues</p>
          <p onClick={handleSave} className={styles.save}><IoSaveOutline className={styles.save} /> Guardar mi avance</p>
        </div>
        <ButtonYellow text={'Continuar'} />
      </div>
    </form>
  );
};

export default MedicalForm;

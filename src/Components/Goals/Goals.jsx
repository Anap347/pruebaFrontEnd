import React, { useState, useEffect } from 'react'
import styles from './goalsDesign.module.css'
import Cards from '../Cards/Cards'
import { TbAppleFilled } from "react-icons/tb";
import { FaWeightScale } from "react-icons/fa6";
import { GiFruitBowl, GiWeightLiftingUp } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import { ButtonYellow } from "../Button/Button"
import { IoSaveOutline } from "react-icons/io5";

const Goals = ({ next }) => {
    const [data, setData] = useState({})
    const [selectedGoal, setSelectedGoal] = useState('');

    useEffect(() => {
        const savedData = localStorage.getItem('data');
        if (savedData) {
          const parsed = JSON.parse(savedData);
          setData(parsed);
          setSelectedGoal(parsed.goal || '');
        }
    }, []);

    
    const changeInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!data.idealWeight || !data.height || !data.minWeight || !data.maxWeight) {
            alert('Todos los campos son obligatorios');
            return;
        }
        localStorage.setItem('data', JSON.stringify(data));
        next();
    }

      const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem('data', JSON.stringify(data));
        alert('cambios guardados')
    }

    const handleGoalSelection = (goalValue) => {
  setSelectedGoal(goalValue);
  setData(prev => ({ ...prev, goal: goalValue }));
};

  return (
    <>
        <form onSubmit={handleSubmit} className={styles.form}>
            <h3 className={styles.sectionTitle}><TbAppleFilled className={styles.svg} /> Objetivos</h3>
            <div className={styles.input_flex}>
                <div className={styles.container_input}>
                    <label className={styles.form_label}>¿Cuál es tu peso ideal?</label>
                    <input className={styles.form_input} type="number" name="idealWeight" value={data.idealWeight} onChange={changeInput} placeholder="0 kg" required />
                </div>
            <div className={styles.container_input}>
                <label className={styles.form_label}>¿Cuánto mides?</label>
                <input className={styles.form_input} type="number" name="height" value={data.height} onChange={changeInput} placeholder="0 cm" required />
            </div>
            <div className={styles.container_input}>
                <label className={styles.form_label}>¿Cuál es tu peso ideal?</label>
                <input className={styles.form_input} type="number" name="idealWeight" value={data.idealWeight} onChange={changeInput} placeholder="0 kg" required />
            </div>
          </div>
        <p>¿Qué buscas al mejorar tu alimentación?</p>
        <div className={styles.cards}>
            <Cards text='Pérdida de peso' icon={<FaWeightScale />} selected={selectedGoal === 'peso'} handleClic={() => setSelectedGoal('peso')}/>
            <Cards text='Alimentación saludable' icon={<GiFruitBowl />} selected={selectedGoal === 'alimentacion'} handleClic={() => setSelectedGoal('alimentacion')} />
            <Cards text='Aumento de masa muscular' icon={<GiWeightLiftingUp />} selected={selectedGoal === 'masa'} handleClic={() => setSelectedGoal('masa')} />
            <Cards text='Control de enfermedades' icon={<FaHeartbeat />} selected={selectedGoal === 'enfermedades'} handleClic={() => setSelectedGoal('enfermedades')} />
        </div>
        <div className={styles.input_flex}>
            <div className={styles.container_input}>
                <label className={styles.form_label}>¿Cuál ha sido tu peso mínimo en los últimos 5 años?</label>
                <input className={styles.form_input} type="number" name="minWeight" value={data.minWeight} onChange={changeInput} placeholder="0 kg" required />
            </div>
            <div className={styles.container_input}>
                <label className={styles.form_label}>¿Cuál ha sido tu peso máximo en los últimos 5 años?</label>
                <input className={styles.form_input} type="number" name="maxWeight" value={data.maxWeight} onChange={changeInput} placeholder="0 kg" required />
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
        </>
  )
}

export default Goals
import React, { useState } from 'react'
import styles from './cardsDesign.module.css'

const Cards = ({text, icon, handleClic, selected}) => {
  
  return (
    <div onClick={handleClic} className={`${styles.cards} ${selected ? styles.selected : ''}`}>
        <p className={styles.color}>{icon}</p>
        <p className={`${styles.color} ${selected ? styles.color_selected : ''}`}>{text}</p>
    </div>
  )
}

export default Cards
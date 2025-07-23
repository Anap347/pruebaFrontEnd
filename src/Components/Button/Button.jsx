import React from "react";
import styles from './buttonDesign.module.css'

export const ButtonYellow = ({text}) => {
    return (
        <button className={styles.button_yellow}>{text}</button>
    )
}
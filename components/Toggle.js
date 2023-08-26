import React, { useState } from 'react';
import styles from '../styles/toggle.module.scss'

function Toggle({handleToggle, activeUnit}) {

    return (
        <div className={styles.wrapp_button}>
            <button
                className={`${styles.button} ${activeUnit === 'kilometers' ? styles.button_active : ''} ${styles.button_border_right}`}
                onClick={() => handleToggle('kilometers')}
            >
                в километрах
            </button>
            <button
                className={`${styles.button} ${activeUnit === 'lunar' ? styles.button_active : ''}`}
                onClick={() => handleToggle('lunar')}
            >
                 в лунных орбитах
            </button>
        </div>
    );
}

export default Toggle;

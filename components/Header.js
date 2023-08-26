import React from 'react';
import styles from '../styles/header.module.scss'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                ARMAGEDDON 2023
            </div>
            <div className={styles.subhead}>
                ООО “Команда им. Б. Уиллиса”. <br/>Взрываем астероиды с 1998 года.
            </div>
        </header>
    );
}

export default Header;

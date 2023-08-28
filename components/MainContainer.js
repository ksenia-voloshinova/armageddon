import React from 'react';
import Header from "./Header";
import styles from "../styles/index.module.scss";


function MainContainer({children}) {
    return (
        <>
            <Header/>
            <section className={styles.wrapp_content}>
                {children}
            </section>
        </>
    );
}

export default MainContainer;

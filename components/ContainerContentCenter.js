import React from 'react';
import styles from "../styles/index.module.scss";

function ContainerContentCenter({children}) {
    return (
        <div className={styles.two_col}>
            {children}
        </div>
    );
}

export default ContainerContentCenter;

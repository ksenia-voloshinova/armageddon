import React from 'react';
import styles from '../styles/CardComponent.module.scss'

const CartComponent = (props) => {
    return (
        <div className={styles.wrapp}>
            <div>
                <p className={styles.head}>Корзина</p>
                <p className={styles.count}>кол-во астероидов</p>
            </div>

            <button className={styles.button}>Отправить</button>
        </div>
    );
}

export default CartComponent;

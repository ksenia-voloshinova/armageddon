import React, {useContext} from 'react';
import styles from '../styles/CardComponent.module.scss'
import {CartContext} from "./CartProvider";
import Link from "next/link";

const CartComponent = (props) => {
    const { listCart } = useContext(CartContext);

    return (
        <div className={styles.wrapp}>
            <div>
                <p className={styles.head}>Корзина</p>
                <p className={styles.count}>{listCart.length} астероидов</p>
            </div>

            <Link  href={`/cart`}>
                <input type="button" className={styles.button} value="Отправить"/>
            </Link>
        </div>
    );
}

export default CartComponent;

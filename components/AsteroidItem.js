import React, {useContext} from 'react';
import styles from "../styles/AsteroidItem.module.scss";
import {formatDate} from "../helpers/formatDate";
import Image from "next/image";
import asteroid_img from "../public/img/pngegg_2.png";
import {CartContext} from "./CartProvider";
import Link from "next/link";
import {getDiameter} from "../helpers/getDiameter";
import {calculateImageWidth} from "../helpers/calculateImageWidth";

function AsteroidItem({asteroid, activeUnit}) {
    const diameter = getDiameter(asteroid)
    const {  addAsteroid, listCart } = useContext(CartContext);

    const handleClick = (item) => {
        addAsteroid(item);
    };

    return (
        <li key={asteroid.id}>
            <Link  href={`/asteroids/${asteroid.id}`}>
                <div className={styles.card_head}>
                    {formatDate(asteroid.close_approach_data[0].close_approach_date)}
                </div>
                <div className={styles.wrapp_content}>
                    <div className={styles.distance}>
                        {Math.floor(asteroid.close_approach_data[0].miss_distance[activeUnit])}
                        {activeUnit === "kilometers" ? " км" : " лунные орбиты" }
                    </div>
                    <Image width={calculateImageWidth(diameter)} src={asteroid_img} alt="image asteroid"/>
                    <div>
                        <div className={styles.name}>{asteroid.name}</div>
                        <div className={styles.diameter}>&#216; {diameter} м</div>
                    </div>
                </div>
            </Link>
            <div className={styles.wrapp_button}>
                <button
                    className={styles.button}
                    onClick={() => handleClick(asteroid)}
                >
                    {!listCart.includes(asteroid) ? "заказать" : "в корзине"}
                </button>
                {asteroid.is_potentially_hazardous_asteroid ?
                    <div className={styles.icon}>
                        <svg
                            data-name="Layer 1"
                            id="Layer_1"
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                        >
                            <defs>
                                <style>
                                    {`.cls-1{fill:#efcc00;}.cls-2{fill:#353535;}`}
                                </style>
                            </defs>
                            <title />
                            <path
                                className="cls-1"
                                d="M30.16,11.51,6.84,51.9a2.13,2.13,0,0,0,1.84,3.19H55.32a2.13,2.13,0,0,0,1.84-3.19L33.84,11.51A2.13,2.13,0,0,0,30.16,11.51Z"
                            />
                            <path
                                className="cls-2"
                                d="M29,46a3,3,0,1,1,3,3A2.88,2.88,0,0,1,29,46Zm1.09-4.66-.76-15h5.26l-.73,15Z"
                            />
                        </svg>
                        <span>опасен</span>
                    </div>
                    : ""
                }

            </div>
        </li>
    );
}

export default AsteroidItem;

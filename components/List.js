import styles from '../styles/List.module.scss'
import AsteroidItem from "./AsteroidItem";


const List = ({asteroids, activeUnit}) => {
    return (
        <>
            <ul className={styles.wrappList}>
                {asteroids.map(asteroid =>
                        <AsteroidItem asteroid={asteroid} activeUnit={activeUnit}/>

                )}
            </ul>
        </>
    );
};

export default List;


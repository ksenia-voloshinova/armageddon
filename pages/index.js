import MainContainer from "../components/MainContainer";
import Toggle from "../components/Toggle";
import List from "../components/List";
import {getDaysForUrl} from "../helpers/getDaysForUrl";
import axios from "axios";
import {useEffect, useState} from "react";
import styles from '../styles/index.module.scss'
import CartComponent from "../components/CartComponent";
import Image from "next/image";
import earth from "../public/img/earth.png"

const  Index = ({asteroidsData}) => {

    const [asteroids, setAsteroids] = useState(Object.values(asteroidsData.near_earth_objects).flat());
    const [activeUnit, setActiveUnit] = useState('kilometers');
    const [fetching, setFetching] = useState(false);
    const [nextLink, setNextLink] = useState(asteroidsData.links.next);
    console.log(asteroids)
    const handleMissDistance = (unit) => {
        setActiveUnit(unit);
    };


    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => document.removeEventListener('scroll', scrollHandler);
    }, []);

    useEffect(() => {
        const fetchByScroll = async () => {
            if (fetching) {
                const { data } = await axios.get(nextLink);
                const nearEarthObjects = Object.values(data.near_earth_objects).flat();
                setAsteroids(prevAsteroids => [...prevAsteroids, ...nearEarthObjects]);                setNextLink(data.links.next);
                setFetching(false);
            }
        };
        fetchByScroll();
    }, [fetching]);

    const scrollHandler = ({ target }) => {
        const totalHeight = target.documentElement.scrollHeight;
        const scrolled = target.documentElement.scrollTop + window.innerHeight;
        if (totalHeight - scrolled < 100) {
            setFetching(true);
        }
    };

    return (
        <MainContainer>
            <div>

                <section className={styles.wrapp_content}>
                    <div className={styles.two_col}>
                        <div className={styles.heading}>Ближайшие подлёты астероидов</div>
                        <Toggle handleToggle={handleMissDistance} activeUnit={activeUnit}/>
                        <List asteroids={asteroids} activeUnit={activeUnit}/>
                    </div>

                    <CartComponent/>
                </section>

            </div>
        </MainContainer>
    );
};

export default Index;

export const getServerSideProps = async () => {
    const { today, tomorrow } = getDaysForUrl();
    const asteroidsData = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${tomorrow}&api_key=6Ay6VXeLSliBmJ0Ti2arrFq330S3bfp4cFGQnb3i`);
    return {
        props: {
            asteroidsData: asteroidsData.data
        },
    };
};

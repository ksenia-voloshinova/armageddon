import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";
import ContainerContentCenter from "../../components/ContainerContentCenter";
import axios from "axios";
import styles from "../../styles/asteroid.module.scss"
export default function User({asteroid}) {
    const {query} = useRouter()
    const diameter = asteroid.estimated_diameter
    return (

        <MainContainer keywords={query.id}>
            <ContainerContentCenter>
                {asteroid ? (
                    <div>
                        <h2 className={styles.heading}>Asteroid Information</h2>
                        <p className={styles.paragraph}>Name: {asteroid.name}</p>
                        <p className={styles.paragraph}>NASA JPL URL: <a href={asteroid.nasa_jpl_url}>{asteroid.nasa_jpl_url}</a></p>
                        <p className={styles.paragraph}>Estimated Diameter (kilometers): {diameter.kilometers.estimated_diameter_min} - {diameter.kilometers.estimated_diameter_max}</p>
                        <p className={styles.paragraph}>Estimated Diameter (miles): {diameter.miles.estimated_diameter_min} - {diameter.miles.estimated_diameter_max}</p>
                        <p className={styles.paragraph} >Is Potentially Hazardous Asteroid: {asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
                    </div>
                ) : (
                    <p>Loading asteroid data...</p>
                )}
            </ContainerContentCenter>
        </MainContainer>
    )
};

export async function getServerSideProps({params}) {
    const asteroid = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${params.id}?api_key=6Ay6VXeLSliBmJ0Ti2arrFq330S3bfp4cFGQnb3i`);
    return {
        props: {asteroid : asteroid.data},
    }
}

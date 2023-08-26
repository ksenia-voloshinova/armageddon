import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";
import axios from "axios";
import Image from 'next/image'

export default function User({asteroid}) {
    const {query} = useRouter()
    return (

        <MainContainer keywords={query.id}>
            <div>
                {asteroid ? (
                    <div>
                        <h2>Asteroid Information</h2>
                        <p>Name: {asteroid.name}</p>
                        <p>NASA JPL URL: <a href={asteroid.nasa_jpl_url}>{asteroid.nasa_jpl_url}</a></p>
                        <p>Estimated Diameter (kilometers): {asteroid.estimated_diameter.kilometers.estimated_diameter_min} - {asteroid.estimated_diameter.kilometers.estimated_diameter_max}</p>
                        <p>Estimated Diameter (meters): {asteroid.estimated_diameter.meters.estimated_diameter_min} - {asteroid.estimated_diameter.meters.estimated_diameter_max}</p>
                        <p>Estimated Diameter (miles): {asteroid.estimated_diameter.miles.estimated_diameter_min} - {asteroid.estimated_diameter.miles.estimated_diameter_max}</p>
                        <p>Estimated Diameter (feet): {asteroid.estimated_diameter.feet.estimated_diameter_min} - {asteroid.estimated_diameter.feet.estimated_diameter_max}</p>
                        <p>Is Potentially Hazardous Asteroid: {asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
                    </div>
                ) : (
                    <p>Loading asteroid data...</p>
                )}
            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({params}) {
    const asteroid = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${params.id}?api_key=6Ay6VXeLSliBmJ0Ti2arrFq330S3bfp4cFGQnb3i`);
    return {
        props: {asteroid : asteroid.data},
    }
}

import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);

    const getDetails = useCallback(async () => {
        const json = await (await fetch(`${process.env.REACT_APP_MOVIE_URL}/${id}${process.env.REACT_APP_BACK}`)).json();
        setDetails(json);
        console.log(json);
    }, [id]);

    useEffect(() => {
        getDetails();
        setLoading(false);
    }, [getDetails]);

    return (
        <div>
            {
                loading ?
                <h1>Loading...</h1>
                :
                <div key={id}>
                    <img
                        className={styles.coverImg}
                        src={`${process.env.REACT_APP_IMAGE_URL}${details.backdrop_path}`}
                        alt={details.title}
                    />
                    <h3>{details.title}</h3>
                    <h6 className={styles.release}>{details.release_date}</h6>
                    <div className={styles.genres}>
                    {
                        details.genres && details.genres.map((genre, index) => (
                            <p key={index} className={styles.genre}>
                                {genre.name}
                            </p>
                        )) 
                    }
                    </div>
                </div>
            }
        </div>
    );
}

export default Detail;
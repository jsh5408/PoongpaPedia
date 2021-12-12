import {useState, useEffect} from "react";
import styles from "./Home.module.css";

function Home() {
    const [movies, setMovies] = useState([]);

    const getMovie = async () => {
        const json = await (await fetch(`${process.env.REACT_APP_MOVIE_API}`)).json();
        setMovies(json.results);
        console.log(json.results);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {
                movies.map((movie, index) => (
                    <div key={index}>
                        <img
                            className={styles.CoverImg}
                            src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Home;
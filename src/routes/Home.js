import {useState, useEffect} from "react";
import styles from "./Home.module.css";
import Movie from "../components/Movie";

function Home() {
    const [movies, setMovies] = useState([]);
    const [genreList, setGenreList] = useState({});

    const getMovie = async () => {
        const json = await (await fetch(`${process.env.REACT_APP_MOVIE_API}`)).json();
        setMovies(json.results);
        console.log(json.results);
    };

    const getGenres = async () => {
        const json = await (await fetch(`${process.env.REACT_APP_GENRES_URL}`)).json();
        let g = {};
        json.genres.map((arr) => g[arr.id] = arr.name);
        setGenreList(g);
    };

    useEffect(() => {
        getMovie();
        getGenres();
    }, []);

    return (
        <div>
            <h2>인기 순위</h2>
            <div className={styles.movies}>
            {
                movies.map((movie, index) => (
                    <Movie
                        key={index}
                        id={index}
                        title={movie.title}
                        poster_path={movie.poster_path}
                        release={movie.release_date}
                        genres={movie.genre_ids}
                        genreList={genreList}
                    />
                ))
            }
            </div>
        </div>
    );
}

export default Home;
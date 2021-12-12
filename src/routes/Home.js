import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
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
        setLoading(false);
    }, []);

    return (
        <div>
            {
                loading ?
                <h1>Loading...</h1>
                :
                <div className="popular">
                    <h2>인기 순위</h2>
                    <div className={styles.movies}>
                    {
                        movies.map((movie) => (
                            <Link className={styles.link} key={movie.id} to={`/movie/${movie.id}`}>
                                <Movie
                                    id={movie.id}
                                    title={movie.title}
                                    poster_path={movie.poster_path}
                                    release={movie.release_date}
                                    genres={movie.genre_ids}
                                    genreList={genreList}
                                />
                            </Link>
                        ))
                    }
                    </div>
                </div>
            }
        </div>
    );
}

export default Home;
import styles from "./Movie.module.css";
import PropTypes from "prop-types";

function Movie({id, title, poster_path, release, genres, genreList}) {

    return (
        <div>
            <div key={id}>
                <img
                    className={styles.coverImg}
                    src={`${process.env.REACT_APP_IMAGE_URL}${poster_path}`}
                    alt={title}
                />
                <h3>{title}</h3>
                <h6 className={styles.release}>{release}</h6>
                <div className={styles.genres}>
                {
                    genres.map((genreID) => (
                        <p key={genreID} className={styles.genre}>
                            {genreList[genreID]}
                        </p>
                    )) 
                }
                </div>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    genreList: PropTypes.object.isRequired
}

export default Movie;
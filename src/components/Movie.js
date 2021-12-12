import { useEffect, useState } from "react";
import styles from "./Movie.module.css";

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

export default Movie;
import styles from "./MovieDetail.module.css";
//import PropTypes from "prop-types";

/*
<div style={{
    width: "100%",
    height: "70%",
    backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}${backdrop_path})`,
    backgroundRepeat: 'no-repeat'
}}>g</div>
<img
    className={styles.coverImg}
    src={`${process.env.REACT_APP_IMAGE_URL}${backdrop_path}`}
    alt={title}
/>
*/
const Header = ({backdrop_path, poster_path, title, release_date, genres}) => {
    return (
        <div className={styles.header}>
            <div className={styles.coverContainer}>
                <div className={styles.headerCover}>
                    <div className={styles.leftImg}></div>
                        <div className={styles.coverImg} style={{
                            background: `url(${process.env.REACT_APP_IMAGE_URL}${backdrop_path}) center center`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                            <div className={styles.leftGradient}></div>
                            <div className={styles.rightGradient}></div>
                        </div>
                    <div className={styles.rightImg}></div>
                    <div className={styles.coverLayer}></div>
                </div>
            </div>
            <div className={styles.headerInfo}>
                <img
                    className={styles.posterImg}
                    src={`${process.env.REACT_APP_IMAGE_URL}${poster_path}`}
                    alt={title}
                />
                <h1>{title}</h1>
                <h3 className={styles.release}>{release_date}</h3>
                <div className={styles.genres}>
                {
                    genres && genres.map((genre, index) => (
                        <p key={index} className={styles.genre}>
                            {genre.name}
                        </p>
                    )) 
                }
                </div>
            </div>
        </div>
    );
};

const Information = ({original_title, status, release_date, runtime, title, overview}) => {
    return (
        <div>
            <h2>기본 정보</h2>
            <p>{original_title}</p>
            <p>{status === "Released" ?
                "개봉"
                :
                "개봉 예정"
            }</p>
            <p>{release_date.slice(0,4)}</p>
            <p>{`${parseInt(runtime/60)}시간 ${runtime%60}분`}</p>
            <p>영화 {`<${title}>`}은 {overview}</p>
        </div>
    );
};

const Casting = ({director, credits}) => {
    return (
        <div>
            <h2>출연/제작</h2>
            <div className={styles.casts}>
                <div key={director.id} className={styles.cast}>
                    <img src={`${process.env.REACT_APP_IMAGE_URL}${director.profile_path}`} className={styles.castImg} alt={director.name} />
                    <div>
                        <p className={styles.castName}>
                            {director.name}
                        </p>
                        <p>{director.job}</p>
                    </div>
                </div>
                {
                    credits.map((cast) => (
                        <div key={cast.id} className={styles.cast}>
                            <img src={`${process.env.REACT_APP_IMAGE_URL}${cast.profile_path}`} className={styles.castImg} alt={cast.name}/>
                            <div>
                                <p className={styles.castName}>{cast.name}</p>
                                <p>{cast.character}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

function MovieDetail({id, backdrop_path, poster_path, title, release_date, genres, original_title, status, runtime, overview, credits, director}) {
    return (
        <div>
            {
                title ?
                <div key={id}>
                    <Header
                        backdrop_path={backdrop_path}
                        poster_path={poster_path}
                        title={title}
                        release_date={release_date}
                        genres={genres}
                    />
                    <div className={styles.information}>
                        <Information
                            original_title={original_title}
                            title={title}
                            release_date={release_date}
                            status={status}
                            runtime={runtime}
                            overview={overview}
                        />
                        <br />
                        <Casting
                            director={director}
                            credits={credits}
                        />
                    </div>
                </div>
                :
                null
            }
        </div>
    );
}

/*
MovieDetail.propTypes = {
    id: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    genreList: PropTypes.object.isRequired,
    original_title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
}
*/

export default MovieDetail;
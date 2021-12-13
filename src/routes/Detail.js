import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    
    const getDetails = async (id) => {
        const json = await (await fetch(`${process.env.REACT_APP_MOVIE_URL}/${id}${process.env.REACT_APP_BACK}`)).json();
        setDetails(json);
        console.log(json);
    };

    useEffect(() => {
        getDetails(id);
        setLoading(false);
    }, [id]);

    return (
        <div>
            {
                loading ?
                <h1>Loading...</h1>
                :
                details && <MovieDetail
                    id={id}
                    backdrop_path={details.backdrop_path}
                    title={details.title}
                    release_date={details.release_date}
                    genres={details.genres}
                    original_title={details.original_title}
                    status={details.status}
                    runtime={details.runtime}
                    overview={details.overview}
                />
            }
        </div>
    );
}

export default Detail;

/*
    const getDetails = useCallback(async (params) => {
        const json = await (await fetch(`${process.env.REACT_APP_MOVIE_URL}/${params}${process.env.REACT_APP_BACK}`)).json();
        setDetails(json);
        console.log(json);
    }, [id]);
    */
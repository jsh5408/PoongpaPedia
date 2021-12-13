import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    const [results, setResults] = useState([]);
    
    const getResults = async (title) => {
        const response = await axios.get(`/api/v1/search/movie.json`, {
            params: {
                query: title
            },
            headers: {
                'X-Naver-Client-Id': process.env.REACT_APP_NAVER_API_CLIENT_ID,
                'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_API_CLIENT_SECRET
            }
        });
        setResults(response.data.items[0]);
        console.log(response);
    };

    const getDetails = async (id) => {
        const json = await (await fetch(`${process.env.REACT_APP_MOVIE_URL}/${id}${process.env.REACT_APP_BACK}`)).json();
        setDetails(json);
        console.log(json);
        if(json) {
            getResults(json.title);
        }
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
                    results={results}
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
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Layout from "../components/layout/Layout";

function Search() {
    const {search} = useParams();
    const [results, setResults] = useState([]);

    const getResults = async (search) => {
        const response = await axios.get(`/v1/search/movie.json`, {
            params: {
                query: search
            },
            headers: {
                'X-Naver-Client-Id': process.env.REACT_APP_NAVER_API_CLIENT_ID,
                'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_API_CLIENT_SECRET
            }
        });
        setResults(response.data.items);
        console.log(response);
    }

    useEffect(() => {
        getResults(search);
    }, [search]);

    return (
        <div>
            <Layout />
            <h1>The Result is...</h1>
            {
                results.map((result, index) => (
                    <div key={index}>
                        <img src={result.image} alt={result.title}/>
                        <h1>{result.title}</h1>
                        <h3>{result.subtitle}</h3>
                        <p>{result.director}</p>
                        <p>{result.actor}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Search;
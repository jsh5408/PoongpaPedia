import axios from "axios";
import { useState } from "react";

function Search() {
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);

    const getResults = async () => {
        const response = await axios.get(`/v1/search/movie.json`, {
            params: {
                query: value
            },
            headers: {
                'X-Naver-Client-Id': process.env.REACT_APP_NAVER_API_CLIENT_ID,
                'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_API_CLIENT_SECRET
            }
        });
        setResults(response.data.items);
        console.log(response);
    }

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        getResults();
    }

    return (
        <div>
            <h1>Search...</h1>
            <form onSubmit={onSubmit}>
                <input value={value} type="text" onChange={onChange} />
                <button>submit</button>
            </form>
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
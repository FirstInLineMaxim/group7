import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import FilmPage from "./Components/FilmPage";
import config from "./config.json";

export default function GetMovieDB() {
    const [result, setResult] = useState();
    const key = process.env.REACT_APP_TMDB_API;
    const [number, setNumber] = useState();
    const { images } = config;
    const { base_url } = images;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${number}?api_key=${key}`)
            .then((response) => response.json())
            .then((data) => setResult(data));
    }, [number]);

    function getNumber() {
        //Nummer zwischen 10000 und 1
        setNumber(Math.floor(Math.random() * 10000 + 1));
    }
    return (
        <>
        

            
            
            {number ? <FilmPage data={result}></FilmPage> : <div className="mainPage">
                <h1>Zufälligen film gefällig</h1>
                <button onClick={getNumber}>Random Movie</button>
            </div>}
        </>
    );
}

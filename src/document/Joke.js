import React, { useState, useEffect } from 'react';
import './Joke.css'

function RandomChuckNorrisJoke() {

    const [joke, setJoke] = useState('');


    const fetchJoke = async () => {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();
            setJoke(data.value);
        } catch (error) {
            console.error('Error fetching data: ', error);
            setJoke('Failed to fetch joke');
        }
    };


    return (
        <div className="joke-container">
            <h1 className="joke-title">Random Joke</h1>
            <p className="joke-text">{joke || "Fetching joke..."}</p>
            <button className="joke-button" onClick={fetchJoke}>Fetch A Joke</button>
        </div>
    );
}

export default RandomChuckNorrisJoke;
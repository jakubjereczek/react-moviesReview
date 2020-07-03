import React from 'react';
import '../styles/Result.css';

const Result = (props) => {

    const { title, released, year, awards, genre, plot, rating, type, poster } = props.movie

    console.log(props.movie);

    return (
        <div className="box">
            <div className="result">
                <h2 className="name">Film/serial ktory znaleźliśmy w bazie danych nosi nazwę: <span className="data">{title}</span></h2>
                <h2 className="name">Informacje</h2>
                <h3>Film/serial: <span className="data">{type}</span>, typ: <span className="data">{genre}</span>.</h3>
                <h3>Poraz pierwszy wydany w roku: <span className="data">{released}</span>.</h3>
                <h3>Produkcja odbyła się w latach/roku: <span className="data">{year}</span>.</h3>
                <h3>Opis: <span className="data">{plot}</span></h3>
                <h3>Nagrodzony: <span className="data">{awards}</span></h3>
                <h3>Ocena: <span className="data">{rating}/10⭐</span></h3>
            </div>
            <div className="image">
                <img src={poster} alt="poster image"></img>
                <button onClick={() => props.fAdd(props.movie)} className="favMovie">Dodaj do ulubionych</button>
            </div>
        </div>
    );
}

export default Result;


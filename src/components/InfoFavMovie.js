import React from 'react';
import '../styles/InfoFavMovie.css';
import { Link } from 'react-router-dom';

const checkMovies = function (movies, id) {
    let exist = false;
    movies.forEach(movie => {
        console.log(movie.id);
        if (movie.id === id) {
            exist = true;
        }
    })
    return exist;
}

const InfoFavMovie = (props) => {
    const id = props.renderProps.match.params.id;
    const movies = props.movies
    const exist = checkMovies(movies, id);
    const index = movies.findIndex(x => x.id === id)

    let info = ""
    if (exist) {
        info = (
            <div class="box">
                <div className="text"><h3>Film/serial (<span className="data">{movies[index].type}</span>) został wydany poraz pierwszy w roku <span className="data">{movies[index].released}</span>. Możemy scharakteryzować jako: <span className="data">{movies[index].genre}</span>.</h3><h3>Produkcja odbyła się w latach <span className="data">{movies[index].year}</span></h3><h3>Opis: <span className="data">{movies[index].plot}</span></h3>
                    <h3>Nagrodzony: <span className="data">{movies[index].awards}</span></h3>
                    <h3>Ocena: <span className="data">{movies[index].rating}/10⭐</span></h3></div>
                <img class="box-photo" alt="poster" src={movies[index].poster}></img>
            </div>

        )
    }
    return (
        <div class="info">
            <h2>Informacje {exist ? `o ${movies[index].title}` : null}</h2>
            {exist ? info : "Film o podanym ID nie istnieje w bazie twoich ulubionych. "}
            <Link to="/">Wróć do strony głownej</Link>
        </div>
    );
}

export default InfoFavMovie;
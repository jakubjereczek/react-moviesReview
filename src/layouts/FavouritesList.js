import React from 'react';
import Movie from '../components/Movie';
import '../styles/FavouritesList.css';

const FavouritesList = (props) => {

    const movies = props.movies.map(movie => <Movie key={movie.id} id={movie.id} title={movie.title} released={movie.released} year={movie.year} awards={movie.awards} genre={movie.genre} plot={movie.plot} rating={movie.rating} type={movie.type} poster={movie.poster} fDel={props.fDel} />)

    return (
        <div class="fav">
            <h2>Lista wybranych filmów (ulubione) <span class="counter">{movies.length}</span></h2>
            <ul>
                {movies.length > 0 ? movies : "Brak ulubionych"}
            </ul>
        </div>
    );
}

export default FavouritesList;



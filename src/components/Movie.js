import React from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';

const Movie = (props) => {

    const { id, title, genre, released, year, awards, plot, rating, type, poster } = props;

    return (
        <li><img className="icon" alt="icon" src={poster} /> {title} <p className="type"> {type} ({genre})</p> <span className="rating">⭐ {rating}/10</span><NavLink className="link" to={`/mov/${id}`} movie={props}>Informacje</NavLink><button onClick={() => props.fDel(id)}>X</button></li >
    );
}

export default Movie;


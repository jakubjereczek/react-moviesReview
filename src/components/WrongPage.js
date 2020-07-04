import React from 'react';
import '../styles/InfoFavMovie.css'
import { Link } from 'react-router-dom';


const InfoFavMovie = () => {
    return (
        <div class="info">
            <h2>Podstrona nie istnieje</h2>
            <Link to="/">Wróć do strony głownej</Link>
        </div>
    );
}

export default InfoFavMovie;
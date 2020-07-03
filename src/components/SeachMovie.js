import React, { Component } from 'react';
import Result from './Result';
import '../styles/SearchMovie.css';
import defaultPoster from '../images/default_poster.png';

class SearchMovie extends Component {

    state = {
        value: "",
        movie: {
            id: "",
            title: "",
            released: "",
            year: "",
            awards: "",
            genre: "",
            plot: "",
            rating: "",
            type: "",
            poster: "",
        },
        isFinded: ""

    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            value,
            isFinded: false
        })
    }

    componentDidUpdate() {
        if (this.state.value.length === 0) {
            return;
        }
        if (this.state.value === this.state.movie.title || this.state.isFinded) {
            return;
        }
        this.getDate();
    }

    getDate = () => {
        const key = '1c584fe2';
        const API = `http://www.omdbapi.com/?t=${this.state.value}&apikey=${key}`;

        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error("Film nie istnieje w bazie");
            })
            .then(response => response.json())
            .then(data => {
                let poster = data.Poster;
                if (poster === "N/A") {
                    poster = defaultPoster;
                }
                const movie = {
                    id: data.imdbID,
                    title: data.Title,
                    released: data.Released,
                    year: data.Year,
                    awards: data.Awards,
                    genre: data.Genre,
                    plot: data.Plot,
                    rating: data.imdbRating,
                    type: data.Type,
                    poster: poster,
                }
                this.setState({
                    movie,
                    isFinded: true
                })
            })
            .catch(error => {
                this.setState(({
                    isFinded: false
                }))
                console.log(error)
            })
    }

    render() {
        return (
            <div className="search">
                <h2 className="title">Wyszukaj film: </h2>
                <input onChange={this.handleChange} type="text" value={this.state.value}></input>
                {this.state.isFinded === true && this.state.movie.title !== undefined ? <Result movie={this.state.movie} fAdd={this.props.fAdd} /> : <h2 className="error">Nie możemy znaleźć filmu o tytule {this.state.value} lub nie rozpoczęto wyszukiwania. </h2>}
            </div >
        );
    }
}

export default SearchMovie;
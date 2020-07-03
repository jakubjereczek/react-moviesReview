import React, { Component } from 'react';
import '../styles/App.css';
import SearchMovie from './SeachMovie'
import FavouritesList from './FavouritesList'


class App extends Component {

  state = {
    movies: [
      // {
      //   id: 0,
      //   title: 'House',
      //   released: "16 Nov 2004",
      //   year: "2004-2012",
      //   awards: "Won 2 Golden Globes. Another 55 wins & 138 nominations.",
      //   genre: 'Drama, Mystery',
      //   plot: 'An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.',
      //   rating: "8.7",
      //   type: 'series'
      // }
    ]
  }

  addMovie = (movie) => {
    const movies = [...this.state.movies];
    movies.push(movie);
    this.setState({
      movies
    })
  }

  deleteMovie = (id) => {
    const movies = [...this.state.movies];
    const filterMovies = movies.filter(movie => movie.id !== id);
    this.setState({
      movies: filterMovies
    })

  }

  render() {
    return (
      <div className="containter">
        <h2 className="logo">MovieReviews</h2>
        <SearchMovie fAdd={this.addMovie} />
        <FavouritesList movies={this.state.movies} fDel={this.deleteMovie} />
      </div>
    );
  }
}

export default App;
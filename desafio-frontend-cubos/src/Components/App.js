import React, { Component } from 'react';
import { GlobalStyles } from './global';
import Header from './headerComponent/header';
import Search from './searchComponent/search';
import MoviesList from './moviesListComponent/moviesList';
import Pagination from './paginationComponent/pagination';
import MovieDetails from './movieDetailsComponent/movieDetails';


class App extends Component {
  constructor(){
    super()
    //atributes
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
    }
    this.apiKey = 'c28851dc21cda1164ad5cf17e885f600'
  }


//call API
  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], totalResults: data.total_results})
    })
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

 /* showVideo = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], movies: [...data.video] })
    })
  } */

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], currentPage: pageNumber })
    })
  }

  viewDetails = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id == id)

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

    this.setState({ currentMovie: newCurrentMovie })
  }

  closeDetails = () => {
    this.setState({ currentMovie: null })
  }

  render (){
    const numberPages = Math.floor(this.state.totalResults / 100);

    return (
      <div>
      <GlobalStyles />
      <Header />
        {this.state.currentMovie == null ? <div><Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/><MoviesList viewDetails={this.viewDetails} movies={this.state.movies} /></div> : <MovieDetails currentMovie={this.state.currentMovie} closeDetails={this.closeDetails}/>}
    { this.state.totalResults > 5 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : '' }
      </div>
    );
  }

}

export default App;

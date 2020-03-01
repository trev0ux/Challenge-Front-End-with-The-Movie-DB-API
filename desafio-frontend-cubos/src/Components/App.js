import React, { Component } from 'react';
import { GlobalStyles, Container } from './global';
import Header from './headerComponent/header';
import Search from './searchComponent/search';
import MoviesList from './moviesListComponent/moviesList';
import Pagination from './paginationComponent/pagination';

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
    }
    this.apiKey = 'c28851dc21cda1164ad5cf17e885f600'
  }

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

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], currentPage: pageNumber })
    })
  }

  render (){
    const numberPages = Math.floor(this.state.totalResults / 50);

    return (
      <div>
      <GlobalStyles />
      <Header />
        <Container>
            <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            <MoviesList movies={this.state.movies} />
    { this.state.totalResults > 5 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : '' }
        </Container>
      </div>
    );
  }

}

export default App;

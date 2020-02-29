import React, { Component } from 'react';
import { GlobalStyles, Container } from './global';
import Header from './headerComponent/header';
import Search from './searchComponent/search';
import MoviesList from './moviesListComponent/moviesList';

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      searchTerm: ''
    }
    this.apiKey = 'c28851dc21cda1164ad5cf17e885f600'
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results]})
    })
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render (){
    return (
      <div>
      <GlobalStyles />
      <Header />
        <Container>
            <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            <MoviesList movies={this.state.movies} />
        </Container>
      </div>
    );
  }

}

export default App;

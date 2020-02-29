import React from 'react';
import Movie from '../moviesComponent/movie';

export const MoviesList = (props) => {
  return (
        <div>
            {
                props.movies.map((movie, i) => {
                    return (
                        <Movie key={i} image={movie.poster_path} />
                    )
                })
            }

            
        </div>
  );
}

export default MoviesList;

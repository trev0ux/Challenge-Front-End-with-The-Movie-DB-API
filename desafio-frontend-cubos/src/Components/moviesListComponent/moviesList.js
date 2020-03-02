import React from 'react';
import Movie from '../moviesComponent/movie';
import {Container} from '../global';


export const MoviesList = (props) => {
  return (
        <div>
            <Container>
            {
                props.movies.map((movie, i) => {
                    return (
                        <Movie viewDetails={props.viewDetails} vote={movie.vote_average} movieId={movie.id} status={movie.status} title={movie.title} video={movie.video} overview={movie.overview} key={i} release_date={movie.release_date} image={movie.poster_path} />
                    )
                })
            }

            </Container>
            
        </div>
  );
}

export default MoviesList;

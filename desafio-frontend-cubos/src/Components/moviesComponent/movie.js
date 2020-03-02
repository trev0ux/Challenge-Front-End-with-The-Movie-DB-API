import React from 'react';
import { Tag, MovieCard, Date, Img, Head, Details, Title, Percents} from './styles';


export const Movie = (props) => {
  return (
    <div>
        <MovieCard onClick={() => props.viewDetails(props.movieId)}> 
          <Head>
            <Title>
  <Percents><a>{props.vote}%</a></Percents>
                  <h2> {props.title} </h2>
                  <Date> {props.release_date.substring(5).split("-").concat(props.release_date.substring(0, 4)).join("/")} </Date>
            </Title>
            <Details>
                    <p>
                    {props.overview}
                  </p>
                  <Tag>Ação</Tag>
                  <Tag Left="28%">Ação</Tag>
                  <Tag Left="34%">Ação</Tag>
            </Details>
                <Img>
                {
                props.image == null ? <img src={"https://semantic-ui.com/images/wireframe/image.png"} alt="card-image" /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card-image"/>
                }
                </Img>
          </Head>
          </MovieCard>
    </div>
  );
}

export default Movie;


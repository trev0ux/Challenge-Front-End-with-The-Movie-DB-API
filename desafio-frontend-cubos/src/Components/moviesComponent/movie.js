import React from 'react';
import { Tag, MovieCard, Date, Img, Head, Details, Title, Percents} from './styles';

export const Movie = (props) => {
  return (
    <div>
        <MovieCard>
        <Head>
          <Title>
          <Percents> 75% </Percents>
                <h2> Thor:Ragnarok </h2>
                <Date> 25/10/2017 </Date>
          </Title>
          <Details>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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


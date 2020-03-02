import React from 'react';
import {Row, Col1, Col2, TagFilm, MovieInfo, Title, Img, Details, PercentsFilm} from './styles';

const MovieDetails = (props) => {
    return (
        <div>
                <MovieInfo>
                <Row>
                    <Title>{props.currentMovie.title}
                        <span>{props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("/")}</span>
                    </Title>
                        <Details>
                        <Col1>
                        <Img>
                        {props.currentMovie.poster_path == null ? <img src={"https://semantic-ui.com/images/wireframe/image.png"} alt="Card image"  /> : <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="card-image"/> }
                        </Img>
                        </Col1> 
                        <Col2>   
                            <h3>Sinopse</h3>
                            <hr></hr>
                            <p>{props.currentMovie.overview}</p>
                            <h3>Informações</h3>
                            <hr></hr>
                            <ul>
                                <li>
                                    <a>Situação<br/><span>{props.currentMovie.status}</span></a>
                                </li>
                                <li>
                                    <a>Idioma<br/><span>{props.currentMovie.spoken_languages}</span></a>
                                </li>
                                <li>
                                    <a>Duração<br/><span>{props.currentMovie.runtime}</span></a>
                                </li>
                                <li>
                                    <a>Orçamento<br/><span>Lançado</span></a>
                                </li>
                                <li>
                                    <a>Receita<br/><span>{props.currentMovie.revenue}</span> </a>
                                </li>
                                <li>
                                    <a>Lucro<br/><span>Lançado</span></a>
                                </li>
                            </ul>
                            <TagFilm>Ação</TagFilm>
                            <TagFilm>Aventura</TagFilm>
                            <TagFilm>Fantasia</TagFilm>
    <PercentsFilm><a>{props.currentMovie.vote_averrage}%</a></PercentsFilm>
                            </Col2>
                        </Details>
                        </Row>
                </MovieInfo>
                    <Row>
                    {props.currentMovie.video}
                    </Row>
        </div>
    )

}

export default MovieDetails;
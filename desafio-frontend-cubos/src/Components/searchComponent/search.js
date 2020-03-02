import React from 'react';
import { Search } from './styles';
import Container from '../global';

export default function SearchForm(props) {
  return (
    <div>
      <Container>
      <form action="" onSubmit={props.handleSubmit}>
        <Search type="text" placeholder="Busque um filme por nome, ano ou gênero..." onChange={props.handleChange}/>
      </form>
      </Container>
    </div>
  );
}

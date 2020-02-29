import React from 'react';
import { Search } from './styles';

export default function SearchForm(props) {
  return (
    <div>
      <form action="" onSubmit={props.handleSubmit}>
        <Search type="text" placeholder="Busque um filme por nome, ano ou gênero..." onChange={props.handleChange}/>
      </form>
    </div>
  );
}

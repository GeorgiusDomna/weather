import React from "react";
import planet from '../../img/planet.svg'
import s from './Search.module.sass'

const Search = ({setInputSearch}) => {

function handlineSubmit(event) {
  event.preventDefault();
  setInputSearch(event.target.input.value);
}

  return (
    <form onSubmit={handlineSubmit} className={s.form}>
      <input placeholder="Введите город" name="input" className={s.input} />
      <button className={s.btn}>
        <img src={planet} alt="searchImg" className={s.img} />
      </button>
    </form>
  );
}

export default Search;
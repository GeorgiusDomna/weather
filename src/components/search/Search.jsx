import React from "react";
import planet from '../../img/planet.svg'
import './style.css'

const Search = ({setInputSearch}) => {

function handlineSubmit(event) {
  event.preventDefault();
  setInputSearch(event.target.input.value);
}

  return (
    <form onSubmit={handlineSubmit} className="form">
      <input placeholder="Введите город" name="input" className="input" />
      <button className="form_btn">
        <img src={planet} alt="searchImg" className="form_img" />
      </button>
    </form>
  );
}

export default Search;
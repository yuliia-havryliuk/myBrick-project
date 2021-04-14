import React from 'react';
import s from './Search.module.css';
import { RiSearchEyeLine } from 'react-icons/ri';
const Search = () => {
  return (
    <label htmlFor="">
      <input
        type="text"
        className={s.searchFiled}
        name=""
        id=""
        placeholder="enter brick's id..."
      />
    </label>
  );
};
export default Search;

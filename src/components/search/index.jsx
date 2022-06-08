import React, { useState } from "react";
import {SearchContainer} from "./style";
import Card from "../Card";

const Search = () => {
    const [search,setSearch]=useState(1);
    const buscar = (e)=>{
        e.preventeDefault()
        setSearch(e.target.value);
    }
  return (
      <SearchContainer>
    <div className="d-flex">
    <input
      className="form-control me-2"
      type="search"
      placeholder='Buscar informacion'
      aria-label="Search"
      onChange={()=> buscar}
    />
    <button className="btn btn-primary" type="submit">
      Buscar
    </button>
    </div>
    </SearchContainer>
  );
};
export default Search;

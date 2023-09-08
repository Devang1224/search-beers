import React from 'react'
import "./searchbar.css";
import { debounce } from 'lodash';


const SearchBar = ({setSearchValue}) => {

  const handleSearch = async(e)=>{
    setSearchValue(e.target.value);
  }

  const debouncedSearch = debounce(handleSearch, 500);

  return (
    <div className='search-container'>
        <input type="text" placeholder='search beer' onChange={debouncedSearch}/>
    </div>
  )
}

export default SearchBar
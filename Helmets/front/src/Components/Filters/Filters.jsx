
import React from 'react';
import { useFilterContext } from '../../Context/FilterContext';
import { useState } from 'react';
const Filters = () => {
  const { sorting, filters: { text }, updateFilterValue } = useFilterContext();

  const [searchQuery, setSearchQuery] = useState(text);
  const handelChange=(e)=>{
    e.preventDefault();
    setSearchQuery(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    if (name && value) {
      setSearchQuery(value);
      updateFilterValue(name, value);
    }
    }
  

  return (
    <>
      {/* Filter Section */}
      <div>
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" onClick={sorting} className='w-75'>
            <option value="name-a" defaultChecked>Name (A - Z)</option>
            <option value="name-z">Name (Z - A)</option>
            <option value="lowest">Price (Low to High)</option>
            <option value="highest">Price (High to Low)</option>
          </select>
        </form>
      </div>
      <div className='py-2'></div>

      {/* Search Section */}
      <div className="filter-search">
        
      <input 
        className='form-control w-75' 
        name="text" 
        type="text" 
        value={searchQuery}
        placeholder="Search" 
        aria-label="Search"  
        onChange={handelChange}/>
      <p>Key Word : {searchQuery}</p>
      </div>
    </>
  );
};

export default Filters;

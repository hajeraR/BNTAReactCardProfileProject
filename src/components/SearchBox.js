import React from 'react';

function SearchBox ({searchChange}) {
    return (
        <div >
           <input
            className = "pa3 ba b--green bg-light-gray" 
            type="search" 
            placeholder="Search Here" 
            onChange={searchChange}
            />
           
        </div>
    )
}

export default SearchBox;

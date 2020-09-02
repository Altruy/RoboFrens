import React from 'react';

const Searchbox = ({searchChange}) => {
    return (
        <div  className='tc'>
            <input type='search'  placeholder='Search Robots' onChange={searchChange}/><br/>
        </div>
    )
}


export default Searchbox
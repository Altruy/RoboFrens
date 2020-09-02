import React from 'react';
import Card from './Card';


const List = ({robots}) =>{
    return (
        <div className='tc'>
            {robots.map((user ,i) => {
                return <Card key ={i} name={robots[i].name} user={robots[i].username} id={robots[i].id}/>})} 
                
        </div>
    )
}


export default List
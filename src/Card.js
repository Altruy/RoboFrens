import React from 'react';

const Card =({name , user , id})=> {
    return(
            <div className='tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
                <img alt='ph' src={`https://robohash.org/${id+12}/?100x100`} />
                <div>
                    <h2>{name}</h2>
                    <p>{user}@altruy.com</p>
                </div>

            </div>
        )
}

export default Card
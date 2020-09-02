import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{overflowY:'scroll',border:'1px solid black',height:'75vh',borderBottom:'3vh solid black'}}>
            {props.children}
        </div>
    );
}

export default Scroll
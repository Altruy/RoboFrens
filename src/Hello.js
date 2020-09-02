import React, { Component } from 'react';

class Hello extends Component {
    render(){
        return(
            <div className='f1 tc'>
                {this.props.message}<br></br>
                <button className='f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box br-pill'>
                    okay then</button>
                
            </div>
        )
    }
}

export default Hello
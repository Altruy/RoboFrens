import React, { Component } from 'react';
// import {robots} from './robots';
import Searchbox from './Searchbox';
import List from './List';
import Scroll from './Scroll';
import './App.css';
import ErrorCatcher from './ErrorCatcher';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>this.setState({robots:users}))
  }

  onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value});
  }


  render(){
    const fr= this.state.robots.filter(_ =>{
      return _.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return !this.state.robots.length?
      <h1 className='tc'>Loading.. pls wait..</h1>
      :<>
      <div style={{height:'22vh'}}>
        <h1 className='tc'>Look for Ur friend Robot</h1>
        <div style={{paddingBottom:'1rem'}}>
        <Searchbox searchChange={this.onSearchChange} />
      </div>
        </div>
        <Scroll>
          <ErrorCatcher>
            <List robots={fr} />
          </ErrorCatcher>
        </Scroll>
      </>
    }
}

export default App;
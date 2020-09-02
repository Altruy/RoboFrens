import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Searchbox from '../components/Searchbox';
import List from '../components/List';
import Scroll from '../components/Scroll';
import ErrorCatcher from './ErrorCatcher';

import {setSearchField, requestRobots} from '../actions'

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending : state.requestRobots.isPending,
    isError : state.requestRobots.isError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange:(event) => dispatch(setSearchField(event.target.value)),
    onrequestRobots: () => dispatch(requestRobots)
    
  }
}

class App extends Component {
  componentDidMount(){
    this.props.onrequestRobots();
  }


  render(){
    const {robots , searchField , onSearchChange , isPending, isError} = this.props;
    const fr= robots.filter(_ =>{
      return _.name.toLowerCase().includes(searchField.toLowerCase());
    })
    if (isError) return <h1 className='tc'>There has been an error</h1>
    return isPending?
      <h1 className='tc'>Loading.. pls wait..</h1>
      :<>
      <div style={{height:'22vh'}}>
        <h1 className='tc'>Look for Ur friend Robot</h1>
        <div style={{paddingBottom:'1rem'}}>
          <Searchbox searchChange={onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
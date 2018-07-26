import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/';
import { pokemonFetch } from '../../Utilities/ApiCalls/apiCalls';


class App extends Component {
  constructor() {
  super();
    this.state = {
    } 
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
    const fetchedData = await pokemonFetch();
    this.setState({
      fetchedData
    })
  } catch(error) {
    console.log(error)
  }
  } 

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  pokemonData: state.fetchedData
})


export default App;

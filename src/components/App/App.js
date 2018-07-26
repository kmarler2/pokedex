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
    const fetchData = await pokemonFetch();
    await this.setState({
      fetchData 
    })
  } catch(error) {
    console.log('oops')
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

import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/';
import { pokemonFetch } from '../../Utilities/ApiCalls/apiCalls';
import { connect } from 'react-redux';
import { addFetchData } from '../../actions';


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
    await this.props.handleFetchData(fetchData);
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

export const mapDispatchToProps = dispatch => {
  handleFetchData: (fetchData) => dispatch(addFetchData(fetchData))
}

export const mapStateToProps = state => ({
  pokemonData: state.fetchedData
})

export default connect(mapStateToProps, null)(App)
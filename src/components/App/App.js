import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/';
import { pokemonFetch } from '../../Utilities/ApiCalls/apiCalls';
import { connect } from 'react-redux';
import { addTypeData } from '../../actions';


class App extends Component {
  constructor() {
  super();
    this.state = {
    } 
  }

  async componentDidMount() {
    const fetchData = await pokemonFetch();
    this.props.handleTypeData(fetchData);
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleTypeData: (types) => dispatch(addTypeData(types))
})

export default connect(null, mapDispatchToProps)(App)
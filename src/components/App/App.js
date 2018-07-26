import React, { Component } from 'react';
import './App.css';
import { pokemonTypeFetch, pokemonFetch } from '../../Utilities/ApiCalls/apiCalls';
import { connect } from 'react-redux';
import { addTypeData } from '../../actions';
import Header from '../Header/header.js';
import { CardContainer } from '../../containers/CardContainer/cardContainer.js';
import Card from '../Card/card.js';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  async componentDidMount() {
    const fetchType = await pokemonTypeFetch();
    this.props.handleTypeData(fetchType);
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <Header />
        <CardContainer />
        <Card />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  selectedType: state.selectedType,
  pokemonTypes: state.pokemonTypes
})

export const mapDispatchToProps = dispatch => ({
  handleTypeData: (types) => dispatch(addTypeData(types))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
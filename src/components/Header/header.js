import React, { Component } from 'react';
import { Card } from '../../components/Card/card.js';
import { addSelectedType } from '../../actions';
import { connect } from 'react-redux';
import { pokemonFetch } from '../../Utilities/ApiCalls/apiCalls.js';

class Header extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  addType = (event) => {
    const selectedType = event.target.innerText;
    this.props.handleSelectedType(selectedType);
    this.findType()
  }

  findType = () => {
    this.props.pokemonTypes.filter(obj => {
      if(obj.name === this.props.selectedType) {
        this.setState({
          ids: obj.pokemon
        })
        this.fetchPokemon();
      }
    })
  }

  fetchPokemon = () => {
    if(this.state.ids) {
    this.state.ids.forEach(async (id) => {
      const pokemon = await pokemonFetch(id);
      console.log(pokemon)
    })
  }
}

  render() {
    return (
      <div>
        <button onClick={this.addType}>normal</button>
        <button onClick={this.addType}>fighting</button>
        <button onClick={this.addType}>flying</button>
        <button onClick={this.addType}>poison</button>
        <button onClick={this.addType}>ground</button>
        <button onClick={this.addType}>rock</button>
        <button onClick={this.addType}>bug</button>
        <button onClick={this.addType}>ghost</button>
        <button onClick={this.addType}>steel</button>
      </div>
      )
  }
}

  export const mapStateToProps = state => ({
  selectedType: state.selectedType,
  pokemonTypes: state.pokemonTypes
})

  export const mapDispatchToProps = dispatch => ({
    handleSelectedType: selectedType => dispatch(addSelectedType(selectedType))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Header)
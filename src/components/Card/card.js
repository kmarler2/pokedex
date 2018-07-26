import React, {Component} from 'react';
import { connect } from 'react-redux';

class Card extends Component {

  render() {
  return (
    <div>
      <h1>{this.props.pokemonObjects.name}</h1>
      <h1>{this.props.pokemonObjects.name && this.props.selectedType}</h1>
      <h1>{this.props.pokemonObjects.weight}</h1>
    </div>
  )}
}

  export const mapStateToProps = state => ({
    pokemonObjects: state.pokemonObjects,
    selectedType: state.selectedType
  })

  export default connect(mapStateToProps, null)(Card)
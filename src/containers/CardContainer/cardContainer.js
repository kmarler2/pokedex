import React from 'react';
import { connect } from "react-redux";

export const CardContainer = (props) => {
  return (
  <div></div>
  )
} 

 const mapStateToProps = state => ({
    selectedType: state.selectedType,
    pokemonTypes: state.pokemonTypes
  })

export default connect(mapStateToProps, null)(CardContainer)
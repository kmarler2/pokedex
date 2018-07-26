import React, { Component } from 'react';
import { Card } from '../../components/Card/card.js';
import { addSelectedType } from '../../actions';
import { connect } from 'react-redux';

export class Header extends Component {

  addType = (event) => {
    const selectedType = event.target.innerText
    this.props.handleClickType(selectedType);
  }

  render() {
    return (
      <div>
        <button onClick={this.addType}>Normal</button>
        <button onClick={this.addType}>Fighting</button>
        <button onClick={this.addType}>Flying</button>
        <button onClick={this.addType}>Poison</button>
        <button onClick={this.addType}>Ground</button>
        <button onClick={this.addType}>Rock</button>
        <button onClick={this.addType}>Bug</button>
        <button onClick={this.addType}>Ghost</button>
        <button onClick={this.addType}>Steel</button>
      </div>
      )
  }
}

  export const mapDispatchToProps = dispatch => ({
    handleClickType: selectedType => dispatch(addSelectedType(selectedType))
  })

export default connect(null, mapDispatchToProps)(Header)
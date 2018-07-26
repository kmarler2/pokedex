import mockData from '../MockData/mockData';
import {addTypeData, addSelectedType, addPokemonData} from './index.js';

describe('addTypeData', () => {
  it('should have the correct info based on what its passed', () => {
    const pokemon = mockData;
    const actual = addTypeData(pokemon);
    expect(actual).toEqual({
      type: 'ADD_TYPES', 
      pokemon
    })
  })
})

describe('addSelectedType', () => {
  it('should have the correct info based on what its passed', () => {
    const pokemon = mockData;
    const actual = addSelectedType(pokemon);
    expect(actual).toEqual({
      type: 'ADD_CLICK_TYPE', 
      pokemon
  })
})
  })

describe('addPokemonData', () => {
  it('should have the correct info based on what its passed', () => {
    const pokemon = mockData;
    const actual = addPokemonData(pokemon);
    expect(actual).toEqual({
      type: 'ADD_POKEMON_DATA', 
      pokemon
  })
})
  })
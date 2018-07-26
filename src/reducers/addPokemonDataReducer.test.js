import addPokemonDataReducer from './addPokemonDataReducer.js';
import mockData from '../MockData/mockData.js';

describe('addPokemonDataReducer', () => {
  it('should return an object', () => {
    const initialState = {}; 
    const action = {
      type: 'ADD_POKEMON_DATA',
      data: mockData
    }
    let newState = addPokemonDataReducer(initialState, action)
    expect(newState).toEqual(action.data)
  })
})
import mockData from '../MockData/mockData';

describe('addTypeData', () => {
  it('should have the correct info based on what its passed', () => {
    const pokemon = mockData;
    const actual = actions.addTypeData(pokemon);
    expect(actual).toEqual({
      type: 'ADD_TYPES', 
      pokemon
    })
  })
})

describe('addSelectedType', () => {
  it('should have the correct info based on what its passed', () => {

  })
})

describe('addPokemonData', () => {
  it('should have the correct info based on what its passed', () => {

  })
})
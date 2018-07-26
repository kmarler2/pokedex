import addTypesReducer from './addTypesReducer.js';
import mockData from '../MockData/mockData.js';

describe('addTypesReducer', () => {
  it('should return an object', () => {
    const initialState = {}; 
    const action = {
      type: 'ADD_TYPES',
      types: mockData
    }
    const newState = addTypesReducer(initialState, action);
    expect(newState).toEqual(action.types)
  })
})
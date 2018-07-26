import addSelectedTypeReducer from './addSelectedTypeReducer.js';
import mockData from '../MockData/mockData.js';

describe('addSelectedTypeReducer', () => {
  it('should return an object', () => {
    const initialState = {}; 
    const action = {
      type: 'ADD_CLICK_TYPE',
      selectedType: mockData
    }
    const newState = addSelectedTypeReducer(initialState, action);
    expect(newState).toEqual(action.selectedType)
  })
})
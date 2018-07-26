import { combineReducers } from 'redux'
import addTypesReducer from './addTypesReducer.js';
import addClickTypeReducer from './addClickTypeReducer';

const rootReducer = combineReducers({
  pokemonTypes: addTypesReducer,
  selectedType: addClickTypeReducer
})

export default rootReducer;

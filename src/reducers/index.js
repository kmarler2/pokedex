import { combineReducers } from 'redux'
import addTypesReducer from './addTypesReducer.js';
import addSelectedTypeReducer from './addSelectedTypeReducer';

const rootReducer = combineReducers({
  pokemonTypes: addTypesReducer,
  selectedType: addSelectedTypeReducer
})

export default rootReducer;

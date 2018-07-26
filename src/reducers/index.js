import { combineReducers } from 'redux'
import addTypesReducer from './addTypesReducer.js';

const rootReducer = combineReducers({
  pokemonTypes: addTypesReducer
})

export default rootReducer;

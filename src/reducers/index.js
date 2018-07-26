import { combineReducers } from 'redux'
import addTypesReducer from './addTypesReducer.js';
import addSelectedTypeReducer from './addSelectedTypeReducer';
import addPokemonDataReducer from './addPokemonDataReducer';

const rootReducer = combineReducers({
  pokemonTypes: addTypesReducer,
  selectedType: addSelectedTypeReducer,
  pokemonObjects: addPokemonDataReducer
})

export default rootReducer;

import { combineReducers } from 'redux'
import addFetchDataReducer from './addFetchDataReducer.js';

const rootReducer = combineReducers({
  pokemonData: addFetchDataReducer
})

export default rootReducer

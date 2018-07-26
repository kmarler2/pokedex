import React from 'react';

export const pokemonTypeFetch = async () => {
  try {
    const url = 'http://localhost:3001/types';
    const response = await fetch(url);
    const pokemonData = await response.json();
    return pokemonData
  } catch(error) {
    console.log(error)
  }
}

export const pokemonFetch = async (id) => {
  try {
    const url = `http://localhost:3001/pokemon/${id}`;
    const response = await fetch(url);
    const pokemonData = await response.json();
    return pokemonData
  } catch(error) {
    console.log(error)
  }
}

//to call: const fetchPokemon = await pokemonFetch('3');

// export const pokemonFetch = () => {
//   const url = 'http://localhost:3001/types';
//   return fetch(url)
//   .then((response) => response.json())
//   .then((data) => data)
// }

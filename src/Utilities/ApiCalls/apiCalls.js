import React from 'react';

export const pokemonFetch = async () => {
  try {
    const url = 'http://localhost:3001/types';
    const response = await fetch(url);
    const pokemonData = await response.json();
    return pokemonData
  } catch(error) {
    console.log(error)
  }
}


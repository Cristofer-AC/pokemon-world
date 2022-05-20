import React from 'react'
import { PokemonCard } from './PokemonCard'

export const PokemonsList = ({ pokemonList }) => {

  const listStyle = {
    display: 'flex',
  }

  return (
    <div style={listStyle} >
      PokemonsList
      {
        pokemonList.map(pokemon => 
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        )
      }
    </div>
  )
}

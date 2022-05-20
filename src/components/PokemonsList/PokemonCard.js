import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelected } from '../../actions'

export const PokemonCard = ({ pokemon }) => {
  
  const { name, sprites } = pokemon
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setSelected(pokemon))
  }


  return (
    <div onClick={handleClick} >
      PokemonCard
      <img src={sprites.front_default} alt={name} />
      <p>{name}</p>
    </div>
  )
}

import React, { useEffect } from 'react'
import { PokemonsList } from '../../components/PokemonsList'
import { Main as MainButton } from '../../components/Buttons/Main'
import { getPokemons } from '../../api/getPokemons'
import { setPokemons } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'

const UNSELECTED = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png'

export const Home = () => {

  const dispatch = useDispatch()
  const list = useSelector((state) => state.list)
  var status
  const selected = useSelector((state) => state.selected)

  selected === "" ?
  status = UNSELECTED 
  : status = selected.sprites.front_default

  const imgStyle = {
    height: '100px',
  }

  useEffect(() => {
    getPokemons()
      .then((res) => {dispatch(setPokemons(res))})
  }, [])
  

  
  return (
    <div>
      <h1>Choose Your Pokemon</h1>
      
      <img src={status} style={imgStyle} alt='pokemons' />
      <PokemonsList pokemonList={list} />
      <MainButton />
    </div>
  )
}

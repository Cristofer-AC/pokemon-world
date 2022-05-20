import axios from "axios"
import axiosInstance from "./axios"

export const getPokemons = (limit = 21) => 
axiosInstance.get(`/pokemon?limit=${limit}`)
    .then((res) => {
        const pokemonList = res.data.results
        return Promise.all(
            pokemonList.map((pokemon) => axios.get(pokemon.url))
        )
    })
    .then((pokemonResponse) => {
        return pokemonResponse.map(response => response.data)
    })
import { SET_POKEMONS, SET_SELECTED, SET_RIVAL, ATTACK, RIVAL_ATTACK ,CHANGE_TURN } from "./types"

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
})

export const setSelected = (payload) => ({
    type: SET_SELECTED,
    payload
})

export const setRival = (payload) => ({
    type: SET_RIVAL,
    payload
})

export const attack = (payload) => ({
    type: ATTACK,
    payload
})

export const changeTurn = (payload) => ({
    type: CHANGE_TURN,
    payload
})

export const rivalAttack = (payload) => ({
    type: RIVAL_ATTACK,
    payload
})

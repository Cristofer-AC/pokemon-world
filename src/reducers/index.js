import { SET_POKEMONS, SET_SELECTED, SET_RIVAL, ATTACK, CHANGE_TURN, RIVAL_ATTACK } from '../actions/types'

const initialState = {
    list: [],
    selected: "",
    rival: "",
    turn: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                ...state, list: action.payload
            }
        case SET_SELECTED:
            return {
                ...state,
                selected: {...action.payload, "HP": 100},
            }
        case SET_RIVAL:
            return {
                ...state,
                rival: {...action.payload, "HP": 100},
            }
        case ATTACK:
            return {
                ...state,
                rival: {...state.rival, "HP": state.rival.HP-action.payload} 
            }
        case CHANGE_TURN:
            return {
                ...state,
                turn: action.payload
            }
        case RIVAL_ATTACK:
            return {
                ...state,
                selected: {...state.selected, "HP": state.selected.HP-action.payload} 
            }
        default:
            return {
                ...state,
            }
    }
}

export default reducer
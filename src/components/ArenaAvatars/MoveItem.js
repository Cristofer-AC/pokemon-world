import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMove } from '../../api/getMove'
import { attack, changeTurn } from '../../actions'

export const MoveItem = ({ move }) => {

    const { name, url } = move
    const [moveData, setMoveData] = useState(null)
    const dispatch = useDispatch()
    const turn = useSelector((state) => state.turn)
    const turnStatus = turn === 1 ? 0 : 1

    const rivalAttack = () => {
        console.log("Rival attacking")
    }

    const pokemonAttack = () => {
        console.log('Pokemon attack:')
        console.log('Attack:' + moveData.name)
        console.log('Power:' + moveData.power)
        dispatch(attack(moveData.power))
        dispatch(changeTurn(turnStatus))
    }

    const handleClick = () => {
        turn === 1 ? 
        pokemonAttack()
        : console.log("It's rival's turn")
    }

    useEffect(() => {
        getMove(url)
          .then((res) => {setMoveData(res)})
      }, [])

    return (
        <div onClick={handleClick} >
            <p>Move: {name}</p>
        </div>
    )
}

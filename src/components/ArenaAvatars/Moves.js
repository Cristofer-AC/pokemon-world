import React from 'react'
import { MoveItem } from './MoveItem'

export const Moves = ({ pokemon }) => {

    const { moves } = pokemon

    const listStyle = {
        display: 'flex'
    }

    const moveList = [
        {move: moves[0].move},
        {move: moves[1].move},
        {move: moves[2].move}
    ]

    return (
    <div>
        <p>Moves</p>
        <div style={listStyle} >
            {moveList.map((item, index) => 
                <MoveItem key={index} move={item.move} />
            )}
        </div>
    </div>
    )
}

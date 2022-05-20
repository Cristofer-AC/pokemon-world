import React from 'react'

export const Avatar = ({ pokemon }) => {

    const {name, sprites = "", HP } = pokemon

    return (
        <div>
            <p>Avatar: {name}</p>
            <img src={sprites.front_default} alt={name} />
            <p>{HP}</p>
        </div>
        
    )
}

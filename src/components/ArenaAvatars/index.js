import React from 'react'
import { Avatar } from './Avatar'
import { Moves } from './Moves'

export const ArenaAvatars = (props) => {

  const { selected, rival } = props

  return (
    <div>
      team
      <Avatar pokemon={selected} />

      rival
      <Avatar pokemon={rival}/>

      <Moves pokemon={selected} />
    </div>
  )
}

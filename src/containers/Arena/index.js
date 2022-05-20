import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setRival } from '../../actions'
import { ArenaAvatars } from '../../components/ArenaAvatars'

export const Arena = () => {

  const dispatch = useDispatch()
  const list = useSelector((state) => state.list)
  const Rival = list[2]

  const selected = useSelector((state) => state.selected)
  const rival = useSelector((state) => state.rival)

  useEffect(() => {
    dispatch(setRival(Rival))
  }, [])
  
  return (
    <div>
      Arena
      <ArenaAvatars selected={selected} rival={rival} />
    </div>
  )
}

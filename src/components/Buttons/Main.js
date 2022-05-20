import React from 'react'
import { Link } from '@reach/router'
import { useSelector } from 'react-redux'

export const Main = () => {

  const selected = useSelector((state) => state.selected)
  var status
  
  selected === '' ?
  status = '' 
  : status = '/arena'

  return (
    <>
      <Link to={status} >
          Text
      </Link>
    </>
  )
}

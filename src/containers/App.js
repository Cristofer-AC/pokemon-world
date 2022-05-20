import React from 'react'
import { Router } from '@reach/router'
import { Home } from './Home'
import { Arena } from './Arena'

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Router>
        <Home path='/' />
        <Arena path='/arena' />
      </Router>
    </div>
  )
}

export default App
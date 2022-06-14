import React from 'react'

import { Featured, FlyFinder, NavBar } from './Components';

const App = () => {
  return (
    <div className='app'>
        <NavBar />
        <Featured />
        <FlyFinder />
    </div>
  )
}

export default App
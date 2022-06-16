import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cassie from './Cassie'
import Nav from './Nav'

const App = () => {
  const pixelArray = Array.from({ length: 400 }, () => <Cassie />)
  
  return (
    <div>
      <h1>Phantasmagoria</h1>
      <Nav />
      <Routes>
        <Route path='/Cam' element={<h1>Cam's Route</h1>} />
        <Route path='/Cassie' element={<h1>Cassie's Route</h1>} />
        <Route path='/Ru' element={<h1>Ru's Route</h1>} />
      </Routes>
    </div>
  )
}

export default App

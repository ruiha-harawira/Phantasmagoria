import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Cam from './Cam'
import Ru from './Ru'
import Cassie from './Cassie'
import Home from './Home'

const App = () => {

  return (
    <div>
      
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cam' element={<Cam />} />
        <Route path='/Cassie' element={<Cassie />} />
        <Route path='/Ru' element={<Ru />} />
      </Routes>
    </div>
  )
}

export default App

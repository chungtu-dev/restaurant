import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'

const Routers = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Navigate to='/' />} /> */}
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default Routers
import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Register from './Register1'
import Rrgisterread from './Rrgisterread'
import Registerupdate from './Registerupdate'

function Registercall() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/read' element={<Rrgisterread/> } />
        <Route path='/update' element={<Registerupdate />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Registercall

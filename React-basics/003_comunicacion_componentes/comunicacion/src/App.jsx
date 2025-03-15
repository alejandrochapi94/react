import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes} from 'react-router-dom'
import {Home} from './Routes/Home'
import {Contacto} from './Routes/Contacto'


function App() {

  return (
    <>
      <Routes>
        <Route path="/inicio" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  )
}

export default App

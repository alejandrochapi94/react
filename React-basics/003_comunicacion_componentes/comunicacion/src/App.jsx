import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes} from 'react-router-dom'
import {Home} from './Routes/Home'
import {Contacto} from './Routes/Contacto'
import { EfectosPage } from './Routes/EfectosPage'
import {UsersApp} from './Routes/UsersApp'

function App() {

  return (
    <>
      <Routes>
        <Route path="/inicio" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/efectos" element={<EfectosPage />} />
        <Route path="/users" element={<UsersApp />} />
      </Routes>
    </>
  )
}

export default App

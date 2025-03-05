import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContadorApp } from './ContadorApp.jsx'
import { ContadorConEvento } from './ContadorConEvento.jsx'
import { ContadorConEvento2 } from './ContadorConEvento2.jsx'
import { ContadorConEvento3 } from './ContadorConEvento3.jsx'
import { ContadorConEvento4 } from './ContadorConEvento4.jsx'
//importacion de componentes con parametros

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <ContadorApp />
    <ContadorConEvento/>
    <ContadorConEvento2/>
    <ContadorConEvento3/>
    <ContadorConEvento4/>
 
    </>

  </StrictMode>,
)

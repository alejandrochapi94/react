import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AgregarTarea } from './components/AgregarTarea.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <AgregarTarea />
  </>
)

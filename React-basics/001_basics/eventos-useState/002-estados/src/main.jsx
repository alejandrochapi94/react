import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Estado1 } from './Estado1.jsx'
import { EstadoOpTernario } from './EstadoOpTernario.jsx'
import { EstadoOpTernario2 } from './EstadoOpTernario2.jsx'
import { EstadoOpTernario3 } from './EstadoOpTernario3.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <Estado1 valor ={0} />
    <EstadoOpTernario />
    <EstadoOpTernario2 />
    <EstadoOpTernario3 />
    </>
)

import { useState } from 'react'

const Items = ({nombre, estado}) => {
    return (
        <li>
            {nombre}
            {estado ? '👍' : '❌'}
        </li>
    )
}

export const EstadoOpTernario2 = () => {
    
    const listadoTareas = [
        {nombre: 'comprar pan', estado: true},
        {nombre: 'comprar queso', estado: true},
        {nombre: 'comprar papa', estado: true},
        {nombre: 'comprar leche', estado: false},
        {nombre: 'comprar agua', estado: false},
    ]

    const [arreglo, setArreglo] = useState(listadoTareas)
    
    return (
        <>
        <h2>Lista de tareas mediante el mapeo de un arreglo</h2>
        <ol>
            {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} estado={item.estado}></Items>)}
        </ol>
        </>
    )
} 

import { useState } from 'react'

const Items = ({nombre, estado}) => {
    return (
        <li>
            {nombre}
            {estado ? '👍' : '❌'}
        </li>
    )
}

export const EstadoOpTernario3 = () => {

    //crear una nueva tarea a la lista de tareas
    const agregarTarea = () => {
        setArreglo([...arreglo, {nombre: 'comprar carne', estado: false}])
    }
    
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
        <h2>Lista de tareas mediante spread operator y el cambio de estado</h2>
        <ol>
            {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} estado={item.estado}></Items>)}
        </ol>
        <button onClick={agregarTarea}>Agregar tarea</button>
        </>
    )
} 

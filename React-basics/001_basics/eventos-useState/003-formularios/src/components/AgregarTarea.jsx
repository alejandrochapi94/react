import {useState } from 'react';

export const AgregarTarea = () => {
//Creamos la funci'on de cambio para la tarea
const onInputChange = (evento) => {
    setTarea(evento.target.value);
}
//Creamos la funcion para enviar la tarea con la prevencion de la carga
const onSubmit = (evento) => {
    evento.preventDefault();
    console.log(tarea);
}

//Creamos el estado para la tarea
const [tarea, setTarea] = useState('');
    return (
        <form onSubmit={onSubmit}>
            <input 
            type="text" 
            placeholder="Agrega una tarea"
            value = {tarea}
            onChange = {onInputChange}
            />
            <button>Agregar</button>
        </form>
    )
}
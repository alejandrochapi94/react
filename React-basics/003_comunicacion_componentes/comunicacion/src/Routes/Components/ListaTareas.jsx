import { useState } from "react";
import { Formulario } from "./Formulario";

export const ListaTareas = () => {

    //Me invento una función que se encargue de crear un item
    //props
    const Item = ({nombre, estado}) =>{
        return(
            <li> {nombre} {estado ? '🥳' : '❌'} </li>
        )
    }
    //Lista de tareas que vienen de bases de datos
    const listadoTareas = [
      { id: 5, tarea: "Hacer la cama", estado: true },
      { id: 6, tarea: "Sacar la basura", estado: false },
      { id: 7, tarea: "Estudiar", estado: false },
      { id: 8, tarea: "Hacer la comida", estado: true},
    ];
    //Función que se va a encargar de crear una nueva tarea
    const agregarTarea = () => {
        console.log("Agregando tarea");
        setTareas([...tareas, {id: 11, tarea: "Nueva tarea 3", estado: false}]);

        //listadoTareas.push({tarea: "Nueva tarea", estado: false})
        //console.log(listadoTareas);
        
    }

    //Variable de estado que va a contener las tareas
    const [tareas, setTareas] = useState(listadoTareas);


  return (
    <div>
      <h1>Soy un componente de Lista de Tareas</h1>
      <ol>
        {tareas.map(item => <Item key={item.id} nombre={item.tarea} estado={item.estado} ></Item>)}
      </ol>
      <p>Ahora un botón</p>
      <button onClick={agregarTarea}>Agregar tarea</button>
        <Formulario funcion = {setTareas} /> 
    </div>
  );
}
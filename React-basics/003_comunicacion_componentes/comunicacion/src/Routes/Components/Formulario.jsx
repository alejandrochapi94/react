import { useState } from "react";

export const Formulario = ({funcion}) => {
  
  //Variable de estado que va a contener la tarea
  const [inputValue, setInputValue] = useState("");
  
  const funcionQueEnviaAlPadre = (e) => {
    setInputValue(e.target.value);
  }

  const funcionEnvio = (e) => {
    //Crear un objeto
    const nuevaTarea = {
      id: 18,
      tarea: inputValue,
      estado: false
    }
    
    e.preventDefault();
    funcion(tareas => [...tareas, nuevaTarea]);
    console.log("Enviando tarea");
  }
  
  
    return (
    <form onSubmit={funcionEnvio}>
      <input 
        type="text" 
        placeholder="Escribe tu tarea"
        value={inputValue}
        onChange={funcionQueEnviaAlPadre} 
      />
    </form>
  );
};

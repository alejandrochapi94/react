import { useState } from "react"
//Uso del usestate para manejar el estado de un componente
export const Estado1 = ({valor}) => {
    //creamos el hook
    const [contador, setContador] = useState(valor)
    
    
    //funcion que suma 1 al valor
    const handleClick =() => {
        setContador(contador + 1)
        console.log(contador + 1)
    }
    
    return (
        <>
        <h4>Contador simple: </h4>
        <p>{contador}</p>
        <button onClick= {handleClick} >
            Contador
        </button>
        </>
    )
}
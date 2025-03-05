
export const ContadorConEvento2= () => {
    //declaracion de la funcion que recibe un evento como parametro
    function handleClick(event){
        console.log(event)
    }
    //retorno del componente
    return (
        <>
        <h4>Contador con un evento pasado al evento onClick: </h4>
        <button onClick= {(event) => handleClick(event)} >
            Contador
        </button>
        </>
    )
}
// en este ejercicio estamos agregando un evento de click al boton, 
// y estamos pasando una funcion que recibe un evento como parametro
// y lo que hace es imprimirlo en consola.
//este evento se usa para saber que evento se esta ejecutando en el boton
// y se puede ver en la consola del navegador.
export const ContadorConEvento = () => {
    return (
        <>
        <h4>Contador con un evento: </h4>
        <button onClick= {function (event) {console.log(event)}} >
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
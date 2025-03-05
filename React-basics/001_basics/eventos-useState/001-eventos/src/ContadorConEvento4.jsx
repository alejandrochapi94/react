
export const ContadorConEvento4 = () => {
    //declaracion de la funcion que recibe un evento como parametro
    function handleClick(event, arg){
        console.log(event)
    }
    //retorno del componente
    //la diferencia con el anterior es que se quito el parametro event
    // ya que se esta pasando automaticamente (solo funciona con arrow 
    // functions y un solo parametro)
    return (
        <>
        <h4>Contador con varios parametros: </h4>
        
        <button onClick= {(event) => handleClick(event, 'otro argumento')} >
            Contador
        </button>
        </>
    )
}

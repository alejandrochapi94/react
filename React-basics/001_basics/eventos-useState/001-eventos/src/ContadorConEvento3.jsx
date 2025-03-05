
export const ContadorConEvento3 = () => {
    //declaracion de la funcion que recibe un evento como parametro
    function handleClick(event){
        console.log(event)
    }
    //retorno del componente
    //la diferencia con el anterior es que se quito el parametro event
    // ya que se esta pasando automaticamente (solo funciona con arrow 
    // functions y un solo parametro)
    return (
        <>
        <h4>Contador mas comun con un solo parametro: </h4>
        
        <button onClick= {handleClick} >
            Contador
        </button>
        </>
    )
}

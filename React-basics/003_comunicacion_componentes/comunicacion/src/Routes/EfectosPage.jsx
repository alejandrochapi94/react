import { ListaUsuarios} from './Components/ListaUsuarios'
import { useState } from 'react'

export const EfectosPage = () => {
    const [endPoint, setendPoint] = useState('users')

    const funcionManual= () => {
        setendPoint('comments')
    }


    return (
        <div>

        <div>Hola soy la página de eventos</div>
        <ListaUsuarios />
        <button onClick={funcionManual}>Llamar a la API</button>
        </div>
    )

}
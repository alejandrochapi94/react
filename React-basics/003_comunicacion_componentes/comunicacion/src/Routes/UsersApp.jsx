import {useState} from 'react';
import { UserList } from './Components/userList';
export const UsersApp = () => {
    
    const [endPoint, setendPoint] = useState('users');

    const handleFetch = () => {
        setendPoint('comments');
    }

    return (
        <div>
            <h1>Hola soy el componente UsersApp</h1>
            {/* <ListaUsuarios /> */}
            <UserList endpoint = {endPoint} />
            <button onClick={handleFetch}>Aquí se llama a la API</button>
        </div>
    )
}
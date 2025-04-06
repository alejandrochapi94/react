import { useState, useEffect } from "react";

export const UserList = ({endpoint}) => {
    
    const [data, setData] = useState([]);

    const fetchdata = async () => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
            const data = await response.json();
            console.log(data)
            setData(data);
        }catch (error){
            console.log(error)
        }

    }

    useEffect(() => {
        fetchdata();
    }, [endpoint])
    
    return (
        <div>
            <h1>Hola soy el componente userList</h1>
            {/* <ListaUsuarios /> */}
            <ul>
                {endpoint === 'users' ? (
                    data.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))
                ) : (
                    data.map(comment => (
                        <li key={comment.id}>{comment.body}</li>
                    ))
                )}
            </ul>
        </div>
    )
}
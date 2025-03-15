//Cosas que vamos a asumir
// Que tenemos una conexión con bases de datos y la data ya la tenemos disponible
import { ListaTareas } from "./Components/ListaTareas";

export const Home = () => {
  return (
    <div>
      <h1>Hola estoy en Home</h1>
        <ListaTareas />
    </div>
  );
};

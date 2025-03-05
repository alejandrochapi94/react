import './PrimerComponente.css';
//Declaración de variables string, number, array, boolean, function, objeto, fecha
const string = 'Hola mundo';
const number = 123;
const array = [1, 2, 3, 4, 5];
const boolean = true;
const funcion = () => 'Hola mundo';
const objeto = {nombre: 'Juan', apellido: 'Perez'};
const fecha = new Date();

export const PrimerComponente = () => {
  return (
    //Tema del componente padre
    <>
    <h1>Variables con jsx</h1>
    <h4>Variables de tipo string: </h4> <p>{string}</p>
    <h4>Variables tipo number:</h4> <p>{number}</p>
    <h4>Variables tipo array:</h4> <p>{array}</p>
    <h4>Variables tipo boolean:</h4> <p>{boolean}</p>
    <h4>Variables tipo function:</h4> <p>{funcion()}</p>
    <h4>Variables tipo objeto:</h4> <p>{objeto.nombre} {objeto.apellido}</p>
    </>
  )
}
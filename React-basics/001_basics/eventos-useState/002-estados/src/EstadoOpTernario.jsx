const Items = ({ nombre, estado }) => {
  return (
    <li>
      {nombre}
      {estado ? "👍" : "❌"}
    </li>
  );
};
export const EstadoOpTernario = () => {
  return (
    <>
      <h2>Lista de tareas</h2>
      <ol>
        <Items nombre="comprar pan" estado={true}></Items>
        <Items nombre="comprar queso" estado={true}></Items>
        <Items nombre="comprar papa" estado={true}></Items>
        <Items nombre="comprar leche" estado={false}></Items>
        <Items nombre="comprar agua" estado={false}></Items>
      </ol>
    </>
  );
};

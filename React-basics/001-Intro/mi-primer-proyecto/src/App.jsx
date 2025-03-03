import Card from "./components/Card";

export default function App() {
  return (
    <>
      <h1>Mis Tarjetas</h1>
      <div className="cards-container">
        <Card title="Tarjeta 1" description="Esta es la primera tarjeta" />
        <Card title="Tarjeta 2" description="Esta es la segunda tarjeta" />
        <Card title="Tarjeta 3" description="Esta es la tercera tarjeta" />
      </div>
    </>
  );
}

import React from 'react';

const Home = () => {
  return (
    <section className="home">
      <h1>Bienvenido a Mi Sitio Web</h1>
      <div className="card-container">
        <div className="card">
          <img src="/image1.jpg" alt="Imagen 1" />
          <h2>Servicio 1</h2>
          <p>Descripción del servicio 1.</p>
        </div>
        <div className="card">
          <img src="/image2.jpg" alt="Imagen 2" />
          <h2>Servicio 2</h2>
          <p>Descripción del servicio 2.</p>
        </div>
        <div className="card">
          <img src="/image3.jpg" alt="Imagen 3" />
          <h2>Servicio 3</h2>
          <p>Descripción del servicio 3.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
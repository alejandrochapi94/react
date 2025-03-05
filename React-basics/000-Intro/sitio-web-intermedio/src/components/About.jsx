import React from 'react';

const About = () => {
  return (
    <section className="about">
      <h1>Sobre Nosotros</h1>
      <div className="about-content">
        <img src="/about.jpg" alt="Sobre Nosotros" />
        <p>
          Somos una empresa dedicada a ofrecer soluciones innovadoras para nuestros clientes.
          Nuestro equipo está compuesto por profesionales altamente capacitados.
        </p>
      </div>
    </section>
  );
};

export default About;
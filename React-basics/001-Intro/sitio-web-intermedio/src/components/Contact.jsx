import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contacto</h1>
      <div className="contact-content">
        <img src="/contact.jpg" alt="Contacto" />
        <form>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo Electrónico" required />
          <textarea placeholder="Mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
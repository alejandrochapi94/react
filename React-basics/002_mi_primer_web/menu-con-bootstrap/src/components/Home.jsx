import React from 'react';

export const Home = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="bg-primary text-white text-center py-5 mb-4">
        <div className="container">
          <h1 className="fw-light">Bienvenidos a Mi Sitio Web</h1>
          <p className="lead">Explora nuestros artículos y aprende más sobre nosotros</p>
        </div>
      </header>

      {/* Artículos */}
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <img className="card-img-top" src="./public/img1.jpg" alt="Artículo 1" />
            <div className="card-body">
              <h4 className="card-title">Artículo 1</h4>
              <p className="card-text">Descripción breve del artículo 1.</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">Leer más</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <img className="card-img-top" src="./public/img2.jpg" alt="Artículo 2" />
            <div className="card-body">
              <h4 className="card-title">Artículo 2</h4>
              <p className="card-text">Descripción breve del artículo 2.</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">Leer más</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <img className="card-img-top" src="./public/img3.jpg" alt="Artículo 3" />
            <div className="card-body">
              <h4 className="card-title">Artículo 3</h4>
              <p className="card-text">Descripción breve del artículo 3.</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">Leer más</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Mi Sitio Web 2025</p>
        </div>
      </footer>
    </div>
  );
}
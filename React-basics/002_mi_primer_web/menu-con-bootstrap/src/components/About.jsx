import React from 'react';

export const About = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="bg-secondary text-white text-center py-5 mb-4">
        <div className="container">
          <h1 className="fw-light">Sobre Nosotros</h1>
          <p className="lead">Conoce más sobre nuestra misión y valores</p>
        </div>
      </header>

      {/* Contenido */}
      <div className="row">
        <div className="col-lg-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec scelerisque nunc. Nulla facilisi. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p>
            Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. 
            Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, 
            quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. 
            Donec viverra auctor lobortis. Pellentesque eu est a nulla placerat dignissim. Morbi a enim in magna semper bibendum. 
            Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. 
            Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus. 
            Quisque lacus quam, egestas ac tincidunt a, lacinia vel velit. Aenean facilisis nulla vitae urna tincidunt congue sed ut dui. 
            Morbi malesuada nulla nec purus convallis consequat. Vivamus id mi quis quam ornare mattis. 
            Vestibulum fermentum, mi sit amet porttitor placerat, neque dui mattis odio, ut suscipit sapien eros a odio. 
            Sed viverra libero ut metus varius laoreet. Curabitur dictum gravida mauris ut aliquam.
          </p>
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
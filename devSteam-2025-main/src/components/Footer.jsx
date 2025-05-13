import React from "react";

const Footer = () => {
  return (
    <footer className="bg-steam-dark py-4 mt-4">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-bottom border-secondary pb-4 mb-4">
        <span className="navbar-brand fw-bold fs-3">DevSteam</span>
          <div className="d-flex flex-wrap justify-content-center gap-3 small text-steam-blue">
            <a href="#" className="nav-link">
              Sobre Nós
            </a>
            <a href="#" className="nav-link">
              Trabalhos
            </a>
            <a href="#" className="nav-link">
              Mais Jogos
            </a>
            <a href="#" className="nav-link">
              GarotosDeProgramas
            </a>
            <a href="#" className="nav-link">
              Suporte
            </a>
          </div>
        </div>
        <div className="text-center small text-secondary">
          <p>
            © 2025 Garotos de Programa. Todos os direitos reservados. Todas as
            marcas registradas são propriedade de seus respectivos donos no
            Brasil e em outros países.
          </p>
          <p className="mt-2">
            Aproveite o Site!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

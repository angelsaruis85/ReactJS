import React from "react";
import { Link } from "react-router-dom";

const navbarj = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to='/'>
			   <img src='./red.svg' width='40' />
		  </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <Link className="nav-link" to='/'>
                Inicio
              </Link>
              <Link className="nav-link" href="#">
                Comercial
              </Link>
              <Link className="nav-link" href="#">
                Ayuda
              </Link>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbarj;

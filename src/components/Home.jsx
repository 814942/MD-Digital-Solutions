import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-conteiner-wr">
        <div className="home-conteiner">
          <div className="home-center">
            <h1>Bienvenido</h1>
            <p>
              Este es un ejercicio de prueba para MD Digital Solutions creado
              por mi, Pablo Garay.
            </p>
          </div>
        </div>
      </div>
      <div className="home-btn-wr">
        <div className="home-btn-conteiner">
          <div className="home-btn">
            <a href="http://www.md-digitalsolutions.com/" target="_blank">
              <button className="btn1 btn">MD Digital Solutions</button>
            </a>
            <a
              href="https://www.linkedin.com/in/pablo-garay-dev/"
              target="_blank"
            >
              <button className="btn2 btn">Sobre Mi</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

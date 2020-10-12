import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi';

import '../styles/pages/landing.css';
import logoImage from '../images/logo.svg';

export default function Landing() {
    return (
        <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImage} alt="Happy" />
        <main>
          <h1>Leve felicidade para o munfdo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Poços de Caldas</strong>
          <span>Minas Gerais</span>
        </div>

        <Link className="enter-app" to="/map">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
    );
}
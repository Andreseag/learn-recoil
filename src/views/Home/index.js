import React from 'react';

import homeImage from '../../assets/images/home.png';
import './style.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-left-child'>
        <h3>Bienvenido de nuevo</h3>
        <h6>Identifícate para encontrar tu música favorita</h6>
        <button type='button'>Iniciar sesión</button>
      </div>
      <div
        className='home-right-child'
        style={{ backgroundImage: `url(${homeImage})` }}
      />
    </div>
  );
};

export default Home;

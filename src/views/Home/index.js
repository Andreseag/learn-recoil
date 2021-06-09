import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import homeImage from '../../assets/images/home.png';
import './style.css';

const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_SPOTIFY_CALLBACK_HOST}&scope=user-read-private`;

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const spotifyCode = urlParams.get('code');
    console.log(spotifyCode);
  }, [location.search]);

  const handleLoginClick = () => {
    window.location.replace(spotifyUrl);
  };

  return (
    <div className='home-container'>
      <div className='home-left-child'>
        <h3>Bienvenido de nuevo</h3>
        <h6>Identifícate para encontrar tu música favorita</h6>
        <button type='button' onClick={handleLoginClick}>
          Iniciar sesión
        </button>
      </div>
      <div
        className='home-right-child'
        style={{ backgroundImage: `url(${homeImage})` }}
      />
    </div>
  );
};

export default Home;

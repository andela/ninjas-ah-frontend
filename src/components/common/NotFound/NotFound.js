import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../../../assets/images/404.png';

const NotFound = (loaded) => {
  const error = 'Error 404';
  const notFoundStyle = { maxWidth: '300px' };
  return (
    <div id="NotFound" className={loaded ? 'showContent' : ''}>
      <div className="image center" style={notFoundStyle}>
        <img src={error404} alt={error} title={error} />
        <h3 className="center-align">Sorry, we could not find a story you are looking for!</h3>
        <br />
        <Link to="/" className="button yellow text-black bold center center-align radius-4">
          Back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

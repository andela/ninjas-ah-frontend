import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import error404 from '../../../assets/images/404.png';

const NotFound = ({ message }) => {
  const error = 'Error 404';
  const notFoundStyle = { maxWidth: '300px' };
  return (
    <div id="NotFound" className="showContent">
      <div className="image center" style={notFoundStyle}>
        <img src={error404} alt={error} title={error} />
        <h3 className="center-align">{message}</h3>
        <br />
        <Link to="/" className="button yellow text-black bold center center-align radius-4">
          Back home
        </Link>
      </div>
    </div>
  );
};

NotFound.propTypes = { message: PropTypes.any };

NotFound.defaultProps = { message: 'We couldn\'t find this page' };

export default NotFound;

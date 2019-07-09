import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { urlHelper } from '../../../helpers';
import googleSVG from '../../../assets/images/google.svg';

const SocialMediaButton = ({ buttonId, name, buttonClass, children, href, size }) => {
  const { reactUrl, defaultUrl } = urlHelper.backend;
  const URL = reactUrl || defaultUrl;

  const button = {
    twitter: {
      icon: faTwitterSquare,
      color: '#50ABF1',
      href: `${URL}/api/v1/auth/twitter`
    },
    facebook: {
      icon: faFacebookSquare,
      color: '#3A559F',
      href: `${URL}/api/v1/auth/facebook`
    },
    google: {
      icon: faGoogle,
      color: 'red',
      href: `${URL}/api/v1/auth/google`,
      image: (
        <img
          src={`${googleSVG}`}
          style={{
            width: `${size}px`,
            marginBottom: '-3px'
          }}
          alt="google"
        />
      )
    }
  };

  return (
    <a href={href || button[name].href} id={buttonId} className={buttonClass}>
      {children || button[name].image || (
        <FontAwesomeIcon
          style={{ fontSize: `${size}px` }}
          icon={button[name].icon}
          color={button[name].color}
        />
      )}
    </a>
  );
};

SocialMediaButton.propTypes = {
  buttonId: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.string,
  buttonClass: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.number
};

SocialMediaButton.defaultProps = {
  buttonClass: 'small-margin',
  size: 45
};

export default SocialMediaButton;

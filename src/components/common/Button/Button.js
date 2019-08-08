import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Button = ({
  buttonId,
  type,
  buttonClass,
  onClick,
  children,
  color,
  loadingIconSize,
  loading,
  ...props
}) => (
  <button
    id={buttonId}
    type={type}
    className={`${buttonClass} ${loading && 'button-disabled'}`}
    onClick={onClick}
    {...props}
  >
    {children}
    {loading && (
      <FontAwesomeIcon
        style={{
          fontSize: `${loadingIconSize}px`,
          marginBottom: '-1px',
          marginLeft: '3px'
        }}
        color={color}
        icon={faSpinner}
        pulse
      />
    )}
  </button>
);
Button.propTypes = {
  buttonId: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  loadingIconSize: PropTypes.number,
  loading: PropTypes.bool,
  children: PropTypes.any,
  buttonClass: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  type: 'button',
  children: 'button',
  onClick: e => e,
  buttonClass: 'radius-4 button yellow bold uppercase',
  color: '#000',
  loadingIconSize: 20,
  loading: false
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  buttonId, type, buttonClass, onClick, children
}) => (
  <button id={buttonId} type={type} className={buttonClass} onClick={onClick}>
    {children}
  </button>
);
Button.propTypes = {
  buttonId: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string,
  buttonClass: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  type: 'button',
  children: 'button',
  buttonClass: 'radius-4 button yellow bold uppercase'
};

export default Button;

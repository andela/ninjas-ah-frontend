import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, text, onClick }) => (
  <div>
    <button className={className} onClick={onClick}>
      {text}
    </button>
  </div>
);
Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
export default Button;

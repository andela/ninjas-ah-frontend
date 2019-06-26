import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  inputFieldId,
  inputId,
  type,
  inputFieldClass,
  inputClass,
  onChange,
  placeholder,
  value,
  name
}) => (
  <div id={inputFieldId} className={`${inputFieldClass}`}>
    <input
      id={inputId}
      name={name}
      type={type}
      value={value}
      className={inputClass}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

Input.propTypes = {
  inputId: PropTypes.string,
  inputFieldId: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  inputFieldClass: PropTypes.string,
  inputClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

Input.defaultProps = {
  name: '',
  type: 'text',
  inputFieldClass: 'input-field',
  placeholder: '',
  value: ''
};

export default Input;

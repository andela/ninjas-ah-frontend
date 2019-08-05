import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({
  inputFieldId,
  inputId,
  type,
  inputFieldClass,
  inputClass,
  onChange,
  placeholder,
  value,
  name,
  error,
  errorWidth,
  isRequired,
  autoComplete,
  disabled
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
      required={isRequired}
      autoComplete={autoComplete}
      disabled={disabled}
    />
    {error ? (
      <div className="input-error danger radius-2" style={{ width: `${errorWidth}px` }}>
        {error}
      </div>
    ) : (
      ''
    )}
  </div>
);

Input.propTypes = {
  inputId: PropTypes.string,
  inputFieldId: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  inputFieldClass: PropTypes.string,
  inputClass: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.any,
  errorWidth: PropTypes.number,
  isRequired: PropTypes.bool,
  autoComplete: PropTypes.string,
  disabled: PropTypes.string
};

Input.defaultProps = {
  isRequired: false,
  autoComplete: 'on',
  name: '',
  type: 'text',
  onChange: e => e,
  inputFieldClass: 'Input input-field',
  placeholder: '',
  value: '',
  errorWidth: 210,
  disabled: ''
};

export default Input;

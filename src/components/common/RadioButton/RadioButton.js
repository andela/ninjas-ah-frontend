import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.scss';

const RadioButton = ({
  inputLabelId,
  inputId,
  type,
  inputLabelClass,
  inputClass,
  onChange,
  value,
  name,
  isRequired,
  label,
  checked,
  disabled
}) => (
  <label id={inputLabelId} className={`${inputLabelClass}`}>
    {label}
    <input
      id={inputId}
      name={name}
      type={type}
      value={value}
      className={inputClass}
      onChange={onChange}
      required={isRequired}
      checked={checked}
      disabled={disabled}
    />
    <span className="checkmark" />
  </label>
);

RadioButton.propTypes = {
  inputId: PropTypes.string,
  inputLabelId: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  inputLabelClass: PropTypes.string,
  inputClass: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  isRequired: PropTypes.bool,
  disabled: PropTypes.string
};

RadioButton.defaultProps = {
  isRequired: false,
  name: 'radio',
  type: 'radio',
  onChange: e => e,
  inputLabelClass: 'RadioButtonContainer',
  value: 'radio',
  disabled: ''
};

export default RadioButton;

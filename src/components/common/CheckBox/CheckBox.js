import React from 'react';
import PropTypes from 'prop-types';
import './CheckBox.scss';

const CheckBox = ({
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

CheckBox.propTypes = {
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

CheckBox.defaultProps = {
  isRequired: false,
  name: 'checkbox',
  type: 'checkbox',
  onChange: e => e,
  inputLabelClass: 'CheckBoxContainer',
  value: 'checkbox',
  disabled: ''
};

export default CheckBox;

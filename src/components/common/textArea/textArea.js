import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  inputFieldId,
  textAreaId,
  type,
  rows,
  cols,
  inputFieldClass,
  inputClass,
  onChange,
  placeholder,
  value,
  name,
  error,
  errorWidth
}) => (
  <div id={inputFieldId} className={`${inputFieldClass}`}>
    <textarea
      id={textAreaId}
      name={name}
      type={type}
      rows={rows}
      cols={cols}
      value={value}
      className={inputClass}
      onChange={onChange}
      placeholder={placeholder}
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

TextArea.propTypes = {
  textAreaId: PropTypes.string,
  inputFieldId: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  inputFieldClass: PropTypes.string,
  inputClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.any,
  errorWidth: PropTypes.number
};

TextArea.defaultProps = {
  name: '',
  type: 'text',
  rows: '',
  onChange: e => e,
  inputFieldClass: 'Input input-field',
  placeholder: '',
  value: '',
  errorWidth: 210
};

export default TextArea;

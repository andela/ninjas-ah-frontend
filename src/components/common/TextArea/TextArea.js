import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.scss';

const TextArea = ({
  textAreaFieldId,
  textAreaId,
  rows,
  textAreaFieldClass,
  textAreaClass,
  onChange,
  placeholder,
  name,
  error,
  errorWidth,
  value,
  isRequired
}) => (
  <div id={textAreaFieldId} className={`${textAreaFieldClass}`}>
    <textarea
      id={textAreaId}
      name={name}
      rows={rows}
      className={textAreaClass}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      required={isRequired}
    />
    {error ? (
      <div className="text-area-error radius-2" style={{ width: `${errorWidth}px` }}>
        {error}
      </div>
    ) : (
      ''
    )}
  </div>
);

TextArea.propTypes = {
  textAreaId: PropTypes.string,
  textAreaFieldId: PropTypes.string,
  name: PropTypes.string,
  rows: PropTypes.number,
  textAreaFieldClass: PropTypes.string,
  textAreaClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.any,
  errorWidth: PropTypes.number,
  isRequired: PropTypes.bool
};

TextArea.defaultProps = {
  name: '',
  rows: 3,
  onChange: e => e,
  textAreaFieldClass: 'TextArea input-field',
  placeholder: '',
  errorWidth: 210
};

export default TextArea;

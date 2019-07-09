import React from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

const Form = ({ formId, formClass, onSubmit, children, formTitle }) => (
  <form id={formId} className={formClass} onSubmit={onSubmit} title={formTitle}>
    {formTitle ? <div className="form-title">{formTitle}</div> : ''}
    {children}
  </form>
);
Form.propTypes = {
  formId: PropTypes.string,
  formTitle: PropTypes.string,
  children: PropTypes.any,
  formClass: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {
  children: 'button',
  formTitle: '',
  formId: undefined,
  onSubmit: e => e,
  formClass: 'Form radius-4 shadow-2 xlarge-padding large-screen-2 medium-screen-2 small-screen-3'
};

export default Form;

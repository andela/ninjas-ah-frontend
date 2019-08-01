import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Modal.scss';
import Button from '../Button/Button';
import { htmlHelper } from '../../../helpers';

const Modal = ({ modalStyle, children, modalBody, modalFooter, closeModal, breakLines }) => (
  <div className="Modal">
    <div className={`modal ${modalStyle}`}>
      <div className="modal-content">
        <div className="modal-header left-align">
          <Button
            buttonClass="button small-padding yellow radius-5 text-black"
            type="button"
            onClick={closeModal}
          >
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </Button>
        </div>
        {modalBody || children ? <div className="modal-body">{modalBody || children}</div> : ''}
      </div>
      {modalFooter ? <div className="modal-footer">{modalFooter}</div> : ''}
      {htmlHelper.tagGenerator('br', null, breakLines)}
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.any,
  modalBody: PropTypes.any,
  modalFooter: PropTypes.any,
  modalStyle: PropTypes.string,
  closeModal: PropTypes.func,
  breakLines: PropTypes.number
};

Modal.defaultProps = { breakLines: 10 };

export default Modal;

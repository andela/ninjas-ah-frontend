import React from 'react';
import PropTypes from 'prop-types';
import './ConfirmModal.scss';
import Button from '../Button/Button';

const ConfirmModal = ({ showModal, message, onClickYes, onClickNo }) => (
    <div className="ConfirmModal">
      <div className={`modal ${showModal}`}>
        <div className="modal-content">
          <div className="modal-body">
            <p className="center-align">{message}</p>
          </div>
          <div className="modal-footer center-align">
            <Button
              onClick={onClickYes}
              className="button medium-padding medium-margin text-white medium-text radius-2 danger"
            >
              Yes
            </Button>
            <Button
              onClick={onClickNo}
              className="button medium-padding medium-margin text-white medium-text radius-2 grey"
            >
              No
            </Button>
          </div>
        </div>
      </div>
    </div>
);

ConfirmModal.propTypes = {
  message: PropTypes.any,
  showModal: PropTypes.string,
  onClickYes: PropTypes.func,
  onClickNo: PropTypes.func
};

ConfirmModal.defaultProps = { message: 'Do you want to perform this action?' };

export default ConfirmModal;

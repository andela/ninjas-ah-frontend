import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button/Button';

export const Follow = ({ id, name, action, onClick }) => (
  <div className="folowUnfollow">
    <Button
      id={id}
      name={name}
      onClick={onClick}
      buttonClass="button small-button primary radius-4 folowUnfollow"
    >
      {action}
    </Button>
  </div>
);

Follow.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  action: PropTypes.string,
  id: PropTypes.string
};

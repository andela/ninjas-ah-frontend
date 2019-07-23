import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import './LikeDislikeButton.scss';

const icons = {
  like: faThumbsUp,
  dislike: faThumbsDown
};

const LikeButton = ({ name, type, buttonId, number, onClick, iconSize, numberSize }) => (
  <div className="LikeButton inline-block">
    <Button onClick={onClick} buttonClass="button light inline-block" name={name} id={buttonId}>
      <FontAwesomeIcon icon={icons[type]} style={{ fontSize: `${iconSize}px` }} />
    </Button>
    <span className="button number inline-block light" style={{ fontSize: `${numberSize}px` }}>
      {number}
    </span>
  </div>
);

LikeButton.propTypes = {
  buttonId: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  number: PropTypes.number,
  iconSize: PropTypes.number,
  numberSize: PropTypes.number,
  onClick: PropTypes.func
};

export default LikeButton;

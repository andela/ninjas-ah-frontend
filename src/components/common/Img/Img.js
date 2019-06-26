import React from 'react';
import PropTypes from 'prop-types';
import placeholder from '../../../assets/images/placeholder.png';

const Img = ({
  imgId,
  imgClass,
  imgSrc,
  alt,
  width,
  height,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth
}) => (
  <img
    id={imgId}
    src={imgSrc || placeholder}
    alt={alt}
    className={imgClass}
    style={{ width, height, maxHeight, minHeight, maxWidth, minWidth }}
  />
);

Img.propTypes = {
  imgId: PropTypes.string,
  imgSrc: PropTypes.string,
  imgClass: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string,
  height: PropTypes.string
};

Img.defaultProps = {
  alt: 'ímage',
  imgSrc: placeholder
};

export default Img;

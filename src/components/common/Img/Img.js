import React from 'react';
import PropTypes from 'prop-types';
import placeholder from '../../../assets/images/placeholder.png';

const Img = ({ imgId, imgClass, imgSrc, alt, width, height }) => (
  <img id={imgId} src={imgSrc} alt={alt} className={imgClass} style={{ width, height }} />
);

Img.propTypes = {
  imgId: PropTypes.string,
  imgSrc: PropTypes.string,
  imgClass: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

Img.defaultProps = {
  imgClass: 'image',
  alt: 'ímage',
  imgSrc: placeholder
};

export default Img;

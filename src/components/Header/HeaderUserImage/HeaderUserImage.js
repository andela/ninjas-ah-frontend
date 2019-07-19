import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Img } from '../../common';
import profileImagePlaceHolder from '../../../assets/images/profile_plaholder.png';
import './HeaderUserImage.scss';

class HeaderUserImage extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="HeaderUserImage">
        <Img imgSrc={image || profileImagePlaceHolder} width="40px" imgClass="radius-5" />
        <FontAwesomeIcon className="caret" icon={faCaretDown} />
      </div>
    );
  }
}

HeaderUserImage.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string
};

const mapStateToProps = ({ user: { profile: { image } } }) => ({ image });

export default connect(mapStateToProps)(HeaderUserImage);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Img, Button } from '../../common';
import './ProfileUserPicture.scss';
import profileImagePlaceHolder from '../../../assets/images/profile_plaholder.png';
import ProfileEditPicture from '../ProfileEdit/ProfileEditPicture';
import { htmlHelper } from '../../../helpers';

export class ProfileUserPicture extends Component {
  state = { modalStyle: 'none' };

  hideModal = () => this.setState({ modalStyle: 'none' });

  showModal = () => this.setState({ modalStyle: 'block' });

  render() {
    const { modalStyle } = this.state;
    const { profile: { image } } = this.props;
    return (
      <div className="ProfileUserPicture center-align medium-padding small-screen-4 medium-screen-4 large-screen-1">
        <Img
          imgSrc={image || profileImagePlaceHolder}
          imgClass="center radius-6"
          maxWidth="200px"
          minWidth="150px"
        />
        <Button onClick={this.showModal}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <div className={`modal ${modalStyle}`}>
          <div className="modal-content">
            <div className="modal-header left-align">
              <Button
                buttonClass="button medium-padding yellow radius-5 text-black"
                onClick={this.hideModal}
              >
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </Button>
            </div>
            <div className="modal-body">
              <ProfileEditPicture />
            </div>
          </div>
          {htmlHelper.tagGenerator('br', null, 10)}
        </div>
      </div>
    );
  }
}

ProfileUserPicture.propTypes = {
  profile: PropTypes.object,
  image: PropTypes.string
};

const mapStateToProps = ({ user: { profile } }) => ({ profile });

export default connect(mapStateToProps)(ProfileUserPicture);

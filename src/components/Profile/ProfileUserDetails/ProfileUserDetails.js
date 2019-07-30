import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEdit, faTimes, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Img, Button } from '../../common';
import './ProfileUserDetails.scss';
import profileImagePlaceHolder from '../../../assets/images/profile_plaholder.png';
import ProfileEditPicture from '../ProfileEdit/ProfileEditPicture';
import ProfileEdit from '../ProfileEdit';
import { htmlHelper } from '../../../helpers';

export class ProfileUserDetails extends Component {
  state = { modalStyle: 'none' };

  hideModal = () => this.setState({ modalStyle: 'none' });

  showModal = () => this.setState({ modalStyle: 'block' });

  render() {
    const { modalStyle } = this.state;
    const { profile: { firstName, lastName, username, email, bio, image } } = this.props;
    return (
      <div className="ProfileUserDetails container">
        <div className="small-screen-4 xxlarge-v-margin border b-light-grey radius-2 shadow-1">
          <div className="profile-picture center-align medium-padding small-screen-4 medium-screen-4 large-screen-1">
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
                    onClick={this.hideModal}>
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
          <div className="center-align small-screen-4 medium-screen-4 large-screen-2">
            <div className="small-padding large-text capitalize names">
              {firstName} {lastName}
            </div>
            <div className="small-padding username">
              {username && '@'}
              {username}
            </div>
            <div className="small-padding email">
              {email && <FontAwesomeIcon icon={faEnvelope} />} {email}
            </div>
            <div className="small-padding bio">{bio}</div>
            <div className="divider" />
            <div>
              <span className="followers">
                <span className="number">{12}</span> Followers
              </span>
              <span className="following">
                <span className="number">{120}</span> Following
              </span>
            </div>
            <div className="divider" />
            <span className="inline-block medium-v-padding">
              <ProfileEdit />
            </span>{' '}
            <span className="inline-block medium-v-padding">
              <Button>
                Follow <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

ProfileUserDetails.propTypes = {
  profile: PropTypes.object,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  bio: PropTypes.string,
  editUserProfile: PropTypes.func
};

const mapStateToProps = ({ user: { profile } }) => ({ profile });

export default connect(mapStateToProps)(ProfileUserDetails);

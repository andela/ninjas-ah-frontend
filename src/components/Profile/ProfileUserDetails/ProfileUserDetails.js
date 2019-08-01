import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../common';
import './ProfileUserDetails.scss';
import ProfileUserPicture from '../ProfileUserPicture';
import profileImagePlaceHolder from '../../../assets/images/profile_plaholder.png';
import { getReadingStats } from '../../../actions/readingStats';
import ProfileEditPicture from '../ProfileEdit/ProfileEditPicture';
import ProfileEdit from '../ProfileEdit';

export class ProfileUserDetails extends Component {
  componentDidMount = () => {
    const { getReadingStats } = this.props;
    getReadingStats();
  };

  render() {
    const {
      profile: { firstName, lastName, username, email, bio, image },
      readingStats
    } = this.props;
<<<<<<< HEAD
<<<<<<< HEAD
    const statCount = readingStats && readingStats.readingStats && readingStats.readingStats.count;
    console.log('this is the results =>', readingStatCount);
=======
    const readingStatCount = readingStats && readingStats.readingStats && 
    readingStats.readingStats.count;
>>>>>>> add reading stats
=======
    const statCount = readingStats && readingStats.readingStats && readingStats.readingStats.count;
>>>>>>> add reading stats
    return (
      <div className="ProfileUserDetails container">
        <div className="small-screen-4 xxlarge-v-margin border b-light-grey radius-2 shadow-1">
          <ProfileUserPicture />
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
              <div className="divider" />
              <span className="block medium-v-padding">
                Reading stats:{' '}
                <Button buttonClass="button radius-2 small-padding yellow">
<<<<<<< HEAD
                  {statCount}{' '}
                  {statCount > 1
                    ? 'articles'
                    : statCount === 1
                      ? 'article'
                      : statCount < 1
                        ? 'article'
                        : 'Not logged in'}
=======
                  {statCount} {statCount > 1 ? 'articles' : 'article'}
>>>>>>> add reading stats
                </Button>
              </span>
            </div>
            <div className="divider" />
            <span className="inline-block medium-v-padding">
              <ProfileEdit />
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
  readingStats: PropTypes.any,
  getReadingStats: PropTypes.func.isRequired,
  email: PropTypes.string,
  image: PropTypes.string,
  bio: PropTypes.string,
  editUserProfile: PropTypes.func
};

const mapStateToProps = ({
  readingStats: {
    readingStats,
    getReadingStats: { errors, message, loading }
  },
  user: { profile }
}) => ({
  profile,
  readingStats,
  errors,
  message,
  loading
});

export default connect(
  mapStateToProps,
  { getReadingStats }
)(ProfileUserDetails);

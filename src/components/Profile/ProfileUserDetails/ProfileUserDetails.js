/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../common';
import './ProfileUserDetails.scss';
import ProfileUserPicture from '../ProfileUserPicture';
import { getReadingStats } from '../../../actions/readingStats';
import ProfileEdit from '../ProfileEdit';

export class ProfileUserDetails extends Component {
  componentDidMount = () => {
    const { getReadingStats } = this.props;
    getReadingStats();
  };

  render() {
    const {
      profile: { firstName, lastName, username, email, bio },
      readingStats
    } = this.props;

    const statCount = readingStats && readingStats.readingStats && readingStats.readingStats.count;

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
                  {statCount}{' '}
                  {statCount > 1
                    ? 'articles'
                    : statCount === 1
                      ? 'article'
                      : statCount < 1
                        ? 'article'
                        : 'Not logged in'}
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

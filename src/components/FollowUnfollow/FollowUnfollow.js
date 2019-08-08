import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../common';
import '../Profile/ProfileUserDetails/ProfileUserDetails.scss';
import { follow, getFollowers, getFollowing, unfollow } from '../../actions';
import { htmlHelper } from '../../helpers';
import { Follow } from './Follow';

export class FollowUnfollow extends Component {
  state = { followersNumber: 0, followingNumber: 0 };

  componentDidMount() {
    const { getFollowers, getFollowing } = this.props;
    getFollowing();
    getFollowers();
  }

  componentWillReceiveProps = (nextProps) => {
    const { followers, following } = nextProps;
    this.setState({
      followersNumber: followers.followers && followers.followers.length,
      followingNumber: Object.keys(following).length
    });
  };

  hideModal = () => {
    this.setState({ modalStyle: 'none' });
  };

  showModal = (e) => {
    this.setState({ modalStyle: 'block', clicked: e.target.name });
  };

  handleclick = (button, username) => {
    const { follow, followUser, unfollow } = this.props;
    this.setState({
      errors: followUser.errors,
      message: followUser.message && followUser.message
    });
    return button === 'follow' ? follow({ username }) : unfollow({ username });
  };

  isFollowed = (following, userId) => {
    let isFollowed = false;

    following.forEach(({ followed }) => {
      if (userId === followed) {
        isFollowed = true;
      }
    });
    return isFollowed;
  };

  render() {
    const {
      followers: { followers },
      following
    } = this.props;
    const { followersNumber, followingNumber, modalStyle, clicked } = this.state;
    return (
      <div>
        <span className="followers">
          <Link
            className="getFollowers text-info"
            name="getFollowers"
            onClick={e => followersNumber && this.showModal(e)}
          >
            <span className="number ">{followersNumber || 0}</span> Followers
          </Link>
        </span>
        <span className="following">
          <Link
            className="getfollowing text-info"
            name="getFollowing"
            onClick={e => followingNumber && this.showModal(e)}
          >
            <span className="number ">{followingNumber || 0}</span> Following
          </Link>
        </span>
        <div className={`modal ${modalStyle} `}>
          <div className="modal-content">
            <div className="modal-header left-align">
              <Button
                buttonClass="button medium-padding yellow radius-5 text-black"
                type="button"
                onClick={this.hideModal}
              >
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </Button>
            </div>
            <div className="row">
              <div className="card radius-2 shadow-1">
                {clicked === 'getFollowers'
                  ? followers
                    && followers.map(({ userId, follower }, key) => (
                      <div className="row" key={key}>
                        <span className="left">
                          <h3 className="capitalize nobold">
                            {follower.firstName} {follower.lastName}
                          </h3>
                          <div className="left">
                            {'@'}
                            {follower.username}
                          </div>
                        </span>
                        <span>
                          {this.isFollowed(following, userId) ? (
                            <span className="right">
                              <Follow
                                id="Unfollow"
                                action="Unfollow"
                                onClick={() => this.handleclick('unfollow', follower.username)}
                              />
                            </span>
                          ) : (
                            <span className="right">
                              <Follow
                                id="follow"
                                action="Follow"
                                onClick={() => this.handleclick('follow', follower.username)}
                              />
                            </span>
                          )}
                        </span>
                        <div className="divider light" />
                      </div>
                    ))
                  : following
                    && following.map(({ followedUser }, key) => (
                      <div className="row" key={key}>
                        <span className="left">
                          <h3 className="capitalize nobold">
                            {followedUser.firstName} {followedUser.lastName}
                          </h3>
                          <div className="left">@{followedUser.username}</div>
                        </span>
                        <span className="right">
                          <Follow
                            id="followingFollow"
                            action="Unfollow"
                            onClick={() => this.handleclick('unfollow', followedUser.username)}
                          />
                        </span>
                        <div className="divider white" />
                      </div>
                    ))}
              </div>
            </div>
          </div>
          {htmlHelper.tagGenerator('br', null, 10)}
        </div>
      </div>
    );
  }
}

FollowUnfollow.defaultProps = { following: [], profile: {} };
FollowUnfollow.propTypes = {
  getFollowing: PropTypes.func,
  getFollowers: PropTypes.func,
  followers: PropTypes.object,
  followedUser: PropTypes.object,
  following: PropTypes.array,
  follow: PropTypes.object,
  followUser: PropTypes.object,
  unfollow: PropTypes.object,
  profile: PropTypes.object
};

const mapStateToProps = ({ user: { profile, followers, following, followUser, errors } }) => ({
  profile,
  followers,
  following,
  followUser,
  errors
});

export default connect(
  mapStateToProps,
  { getFollowers, getFollowing, follow, unfollow }
)(FollowUnfollow);

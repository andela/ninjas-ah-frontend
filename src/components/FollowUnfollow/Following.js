import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Alert } from '../common';
import { follow, getFollowers, getFollowing, unfollow } from '../../actions';
import { Follow } from './Follow';
import { clearHighlightArticleStore } from '../../actions/articles';

export class Following extends Component {
  state = {};

  handleclick = (button) => {
    const {
      follow,
      unfollow,
      article: {
        author: { username },
        errors,
        message
      }
    } = this.props;
    this.setState({
      errors,
      message: message && message
    });
    if (button === 'follow') {
      follow({ username });
    } else {
      unfollow({ username });
    }
  };

  componentDidMount = () => {
    const { getFollowing } = this.props;

    getFollowing();
  };

  isFollowing = (following = [], article = {}) => {
    let isFollowing = false;
    following.forEach((element) => {
      if (element.followed === article.userId) {
        isFollowing = true;
      }
    });
    return isFollowing;
  };

  render() {
    const { following, article, errors, message } = this.props;

    return (
      <div>
        <div className="small-screen-4">
          {message || (errors && errors.follow) ? (
            <Alert
              alertType={(message && 'success') || 'danger'}
              message={message || errors.follow}
            />
          ) : (
            ''
          )}
        </div>
        {this.isFollowing(following, article) ? (
          <Follow id="unfollow" action="Unfollow" onClick={() => this.handleclick('unfollow')} />
        ) : (
          <Follow id="follow" action="Follow" onClick={() => this.handleclick('follow')} />
        )}
      </div>
    );
  }
}

Following.defaultProps = { following: [], article: {} };

Following.propTypes = {
  getFollowing: PropTypes.func,
  following: PropTypes.array,
  article: PropTypes.object,
  follow: PropTypes.object,
  unfollow: PropTypes.func,
  errors: PropTypes.object,
  message: PropTypes.object
};
const mapStateToProps = ({ user: { isAuth, following, errors }, articles: { article } }) => ({
  article,
  isAuth,
  following,
  errors
});
export default connect(
  mapStateToProps,
  { follow, getFollowers, getFollowing, clearHighlightArticleStore, unfollow }
)(Following);

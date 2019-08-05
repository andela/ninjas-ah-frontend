import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Button from '../common/Button/Button';
import { bookmarkArticle } from '../../actions/bookmarks';

export class BookmarkArticle extends Component {
  state = { bookmarkClicked: false, bookmarks: '' };

  handleClick = () => {
    const {
      article: { slug },
      bookmarkArticle,
      isAuth
    } = this.props;
    if (isAuth) {
      bookmarkArticle({ slug });
      this.setState({ isAuth: true, bookmarkClicked: true });
    } else {
      this.setState({ isAuth: false, bookmarkClicked: true });
    }
  };

  componentWillReceiveProps(nextProps) {
    const {
      bookmarks: { bookmarks },
      article: { slug }
    } = nextProps;
    if (bookmarks && !bookmarks.userId) {
      this.setState({
        bookmarks,
        slug
      });
    } else {
      this.setState({
        bookmarks: 'Article bookmarked successfully',
        slug
      });
    }
  }

  render() {
    const { isAuth, bookmarkClicked, bookmarks, slug } = this.state;

    return (
      <div className="inline-block">
        <Button
          id="bookmarkArticle"
          buttonClass="button border b-light-grey medium-padding light inline-block radius-1"
          onClick={this.handleClick}
        >
          Bookmark {''}
          <FontAwesomeIcon icon={faBookmark} />
        </Button>
        {!isAuth && bookmarkClicked ? (
          <div style={{ position: 'absolute' }}>
            <Link className="text-info bold" to={`/login?redirect=articles/${slug}`}>
              Login
            </Link>{' '}
            <span className="text-grey">to perform this action</span>
          </div>
        ) : (
          ''
        )}
        {isAuth && bookmarkClicked ? (
          <p className="error-message text-danger ">{bookmarks || ''}</p>
        ) : (
          ''
        )}
        <span />
      </div>
    );
  }
}
BookmarkArticle.propTypes = {
  article: PropTypes.object,
  bookmarkArticle: PropTypes.func,
  bookmarks: PropTypes.object,
  isAuth: PropTypes.bool
};

const mapStateToProps = ({ user: { isAuth }, articles: { article }, bookmarks }) => ({
  article,
  bookmarks,
  isAuth
});

export default connect(
  mapStateToProps,
  { bookmarkArticle }
)(BookmarkArticle);

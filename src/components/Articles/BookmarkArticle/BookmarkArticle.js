import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { bookmarkArticle } from '../../../actions/articles';

export class BookmarkArticle extends Component {
  state = { bookmarkClicked: false };

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

  render() {
    const { isAuth, bookmarkClicked } = this.state;
    const {
      bookmark: { errors },
      article: { slug }
    } = this.props;

    return (
      <div className="row">
        Bookmark
        <Button id="bookmarkArticle" buttonClass="button small-padding" onClick={this.handleClick}>
          <FontAwesomeIcon icon={faBookmark} />
        </Button>
        {!isAuth && bookmarkClicked ? (
          <p className="text-danger">
            <Button buttonClass="button medium-padding primary radius-3">
              <Link to={`/login?redirect=articles/${slug}`}>Login</Link>
            </Button>
            To perform this action
          </p>
        ) : (
          ''
        )}
        {isAuth && (errors && bookmarkClicked) ? (
          <p className="text-danger">This article is already bookmarked</p>
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
  bookmark: PropTypes.object,
  isAuth: PropTypes.bool
};

const mapStateToProps = ({ user: { isAuth }, articles: { article, bookmark } }) => ({
  article,
  bookmark,
  isAuth
});

export default connect(
  mapStateToProps,
  { bookmarkArticle }
)(BookmarkArticle);

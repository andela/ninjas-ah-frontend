import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getArticleLikes, likeArticle, dislikeArticle } from '../../../actions';
import { Button, LikeDislikeButton } from '../../common';
import { clearHighlightArticleStore } from '../../../actions/articles';
import './LikeArticle.scss';

export class LikeArticle extends Component {
  state = {
    likeClicked: false,
    dislikeClicked: false,
    likesNumber: 0,
    dislikesNumber: 0,
    errors: {},
    message: ''
  };

  articleLikes = (slug) => {
    const { getArticleLikes } = this.props;
    getArticleLikes(slug);
  };

  handleLikeClick = (button) => {
    if (button === 'like') {
      this.setState({ likeClicked: true });
      const {
        article: { slug },
        likeArticle
      } = this.props;
      likeArticle({ slug, status: 'like' });
    }
    if (button === 'dislike') {
      this.setState({ dislikeClicked: true });
      const {
        article: { slug },
        dislikeArticle
      } = this.props;
      dislikeArticle({ slug, status: 'dislike' });
    }
  };

  componentWillReceiveProps(nextProps) {
    const {
      article: {
        likes: { number: likesNumber },
        dislikes: { number: dislikesNumber }
      }
    } = nextProps;

    this.setState(prevState => ({
      ...prevState,
      likesNumber,
      dislikesNumber,
      errors: nextProps.likeErrors,
      message: nextProps.likeMessage
    }));
  }

  componentDidMount() {
    const { article: { slug } } = this.props;
    this.articleLikes(slug);
    clearHighlightArticleStore();
  }

  render() {
    const { likesNumber, dislikesNumber, likeClicked, dislikeClicked } = this.state;
    const {
      isAuth,
      article: { slug }
    } = this.props;
    return (
      <div className="wrap-article">
        <LikeDislikeButton
          className="like"
          name="like"
          type="like"
          iconSize={20}
          numberSize={18}
          number={likesNumber}
          onClick={() => this.handleLikeClick('like')}
        />
        <LikeDislikeButton
          className="dislike"
          name="dislike"
          type="dislike"
          iconSize={20}
          numberSize={18}
          number={dislikesNumber}
          onClick={() => this.handleLikeClick('dislike')}
        />
        {!isAuth && (likeClicked || dislikeClicked) ? (
          <div className="text-danger error-message">
            <Link className="text-danger bold" to={`/login?redirect=articles/${slug}`}>
              Login
            </Link>{' '}
            <span className="text-grey">to perform this action</span>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
LikeArticle.propTypes = {
  article: PropTypes.object,
  getArticleLikes: PropTypes.func,
  likes: PropTypes.object,
  dislike: PropTypes.object,
  likeArticle: PropTypes.func,
  dislikeArticle: PropTypes.func,
  likeErrors: PropTypes.object,
  likeMessage: PropTypes.string,
  isAuth: PropTypes.bool
};
const mapStateToProps = ({ user: { isAuth }, articles: { article, like, getLikes } }) => ({
  article,
  likeLoading: like.loading,
  likeErrors: like.errors,
  likeMessage: like.message,
  isAuth,
  getLikes
});

export default connect(
  mapStateToProps,
  { getArticleLikes, likeArticle, dislikeArticle, clearHighlightArticleStore }
)(LikeArticle);

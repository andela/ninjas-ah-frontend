import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createRate, fetchOneArticle } from '../../../actions';
<<<<<<< HEAD
import { clearHighlightArticleStore } from '../../../actions/articles';
=======
>>>>>>> [feature #165412889 && #165412878] add article rating && article read time
import './Rating.scss';

export class Rating extends Component {
  state = { rating: 0, slug: '' };

  componentDidMount() {
    this.setState({ rating: this.props.rating });
  }

  componentWillReceiveProps(nextProps) {
    const { errors, message, article } = nextProps;
    if (message) {
      this.setState({ message });
    }
    if (errors) {
      this.setState({ errors });
    }
    if (Object.keys(article).length !== 0) {
      this.setState({ rating: article.rating });
    }
    this.setState({ loaded: true });
  }

  submitRate = async (rating) => {
<<<<<<< HEAD
    const { isAuth, slug, fetchOneArticle, clearHighlightArticleStore } = this.props;
    if (isAuth) {
      await this.props.createRate(slug, rating);
      await fetchOneArticle(slug);
      clearHighlightArticleStore();
=======
    const { isAuth, slug, fetchOneArticle } = this.props;
    if (isAuth) {
      await this.props.createRate(slug, rating);
      await fetchOneArticle(slug);
>>>>>>> [feature #165412889 && #165412878] add article rating && article read time
    } else {
      this.setState({ errors: { token: 'Failed to authenticate token' } });
    }
  };

  closeMessage = () => {
    this.setState({ message: '' });
    this.setState({ errors: '' });
  };

  ratingStars = () => (
    <div>
      <span className="bold small-padding light left radius-1 medium-h-margin">Rating</span>
      <div className="wrap-stars">
        <div className="rating-percent" style={{ width: `${(this.state.rating * 100) / 5}%` }} />
        {Array.from(Array(5), (e, i) => (
          <div
            onClick={() => this.submitRate(i + 1)}
            key={i + 1}
            className={this.state.rating > i ? 'one-star' : 'one-star'}
          >
            {this.state.rating > i}
          </div>
        ))}
      </div>
      <i>{this.state.rating}</i>
    </div>
  );

  render() {
    const { errors, message } = this.state;
    return (
      <span id="wrap-ratings" className="right">
        {this.ratingStars()}
        {(errors && Object.keys(errors).length && !errors.token)
        || (message && Object.keys(message).length) ? (
          <span className="rating-errors">
            {errors.rating || message}
            <i onClick={() => this.closeMessage()}>Close</i>
          </span>
          ) : (
            ''
          )}
        {errors && errors.token ? (
          <span className="rating-errors">
            Login first to perform this action.{' '}
            <Link className="text-info" to={`/login?redirect=article/${this.props.slug}`}>
              Login
            </Link>
            <i onClick={() => this.closeMessage()}>Close</i>
          </span>
        ) : (
          ''
        )}
      </span>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.any,
  errors: PropTypes.any,
  slug: PropTypes.string,
  ratingStars: PropTypes.func,
  createRate: PropTypes.func,
<<<<<<< HEAD
  clearHighlightArticleStore: PropTypes.func,
=======
>>>>>>> [feature #165412889 && #165412878] add article rating && article read time
  message: PropTypes.string,
  fetchOneArticle: PropTypes.func.isRequired,
  article: PropTypes.object,
  isAuth: PropTypes.bool
};
export const mapStateToProps = ({
  user: { isAuth },
  articles: { article },
  rating: { createRate: { loading, message, errors } }
}) => ({ loading, message, errors, article, isAuth });

export default connect(
  mapStateToProps,
<<<<<<< HEAD
  { createRate, fetchOneArticle, clearHighlightArticleStore }
=======
  { createRate, fetchOneArticle }
>>>>>>> [feature #165412889 && #165412878] add article rating && article read time
)(Rating);

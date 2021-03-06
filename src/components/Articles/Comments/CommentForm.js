import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextareaAutosize from 'react-autosize-textarea';
import './Comments.scss';
import { createComment } from '../../../actions';

export class CommentForm extends Component {
  state = { loading: true, comment: '' };

  componentWillMount() {
    const { comments } = this.props;
    this.setState({ comments });
  }

  componentWillReceiveProps(nextProps) {
    const { errors } = nextProps;
    if (errors) {
      this.setState({ errors });
    }
    this.setState({ loaded: true });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { isAuth, slug, createComment } = this.props;
    const { comment } = this.state;
    this.setState({ errors: {}, comment: '' });
    return isAuth
      ? createComment({ comment, slug })
      : this.setState({ errors: { token: 'Failed to authenticate token' } });
  };

  render() {
    const { isAuth, profile, slug, loading } = this.props;
    const { errors, comment } = this.state;
    return (
      <div id="comment-form-wrapper">
        {!isAuth || (errors && errors.token) ? (
          <div className="border b-light medium-padding">
            To comment,{' '}
            <Link
              className="bold text-info"
              to={`/login?redirect=articles/${slug}#comment-form-wrapper`}>
              Login
            </Link>{' '}
            first
          </div>
        ) : (
          <div className="border b-light medium-padding">
            You are commenting as{' '}
            <Link to="/" className="bold text-success">
              {profile.firstName} {profile.lastName}
            </Link>
          </div>
        )}
        <form id="submit-comment" onSubmit={this.onSubmit}>
          <div className="input-field">
            <TextareaAutosize
              name="comment"
              onChange={this.onChange}
              value={comment}
              placeholder="Write your comment here..."
              style={{ minHeight: 12 }}
              id="commentBody"
              className="shadow-1"
            />
          </div>
          <div className="input-field">
            <button type="submit" className="button success text-white radius-5">
              Comment
            </button>
            {loading ? <span className="medium-padding radius-5">loading</span> : ''}
            {errors && errors.token ? (
              <span className="medium-padding radius-5 text-danger">You need to login first</span>
            ) : (
              ''
            )}
            {errors && errors.message ? (
              <span className="medium-padding radius-5 text-danger">{errors.message}</span>
            ) : (
              ''
            )}
          </div>
        </form>
        <div className="clear" />
      </div>
    );
  }
}

CommentForm.propTypes = {
  createComment: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
  profile: PropTypes.object,
  comments: PropTypes.array,
  slug: PropTypes.string,
  comment: PropTypes.string,
  rating: PropTypes.number,
  params: PropTypes.object,
  match: PropTypes.object,
  errors: PropTypes.object,
  loading: PropTypes.bool,
  message: PropTypes.any
};

const mapStateToProps = ({
  user: { isAuth, profile },
  comments: { createComment: { comments, message, errors, loading } }
}) => ({ isAuth, profile, comments, message, errors, loading });

export default connect(
  mapStateToProps,
  { createComment }
)(CommentForm);

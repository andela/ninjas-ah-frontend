import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextareaAutosize from 'react-autosize-textarea';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faThumbsUp,
//   faClock,
//   faPenAlt,
//   faTrash,
//   faCommentAlt
// } from '@fortawesome/free-solid-svg-icons';
import './Comments.scss';
import { createComment } from '../../../actions';

export class CommentForm extends Component {
  state = { loading: true, comment: '' };

  componentWillMount() {
    const { comments } = this.props;
    // createComment(this.props.slug);
    this.setState({ comments });
  }

  componentWillReceiveProps(nextProps) {
    const { errors, comments, message } = nextProps;
    console.log('will', message, comments);
    if (errors) {
      this.setState({ errors });
    }
    this.setState({ loaded: true });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { isAuth, slug } = this.props;
    if (isAuth) {
      await this.props.createComment({ comment: this.state.comment, slug });
    } else {
      this.setState({ errors: { token: 'Failed to authenticate token' } });
    }
  };

  render() {
    const { isAuth, profile, slug, loading } = this.props;
    const { errors, comment, message } = this.state;
    console.log('loading', loading, message, errors && errors);
    return (
      <div id="comment-form-wrapper">
        {!isAuth || (errors && errors.token) ? (
          <div className="border b-light medium-padding">
            To comment,{' '}
            <Link
              className="bold text-info"
              to={`/login?redirect=articles/${slug}#comment-form-wrapper`}
            >
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
        <form onSubmit={this.onSubmit}>
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
            <button type="submit" className="button success bold text-white radius-5">
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
  message: PropTypes.object
};

const mapStateToProps = ({
  user: { isAuth, profile },
  comments: { createComment: { comments, message, errors, loading } }
}) => ({ isAuth, profile, comments, message, errors, loading });

export default connect(
  mapStateToProps,
  { createComment }
)(CommentForm);

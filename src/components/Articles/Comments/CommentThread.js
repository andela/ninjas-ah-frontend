import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import TextareaAutosize from 'react-autosize-textarea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faClock,
  faPenAlt,
  faTrash,
  faCommentAlt
} from '@fortawesome/free-solid-svg-icons';
import './Comments.scss';
import { css } from '@emotion/core';
import { fetchComments, deleteComment, editComment } from '../../../actions';
import { Img } from '../../common';
import timeStamp from '../../../helpers/timeStamp';
import avatar from '../../../assets/images/profile_plaholder.png';

export class CommentThread extends Component {
  state = { comments: [], slug: '', body: '', commentEditor: {}, newComments: {} };

  componentDidMount() {
    const { fetchComments } = this.props;
    fetchComments(this.props.slug);
  }

  componentWillReceiveProps = (nextProps) => {
    const { comments, deleted } = nextProps;
    const { commentKey } = this.state;
    if (comments) {
      this.setState({ comments });
    }
    if (deleted && commentKey !== undefined) {
      delete comments[commentKey];
      this.setState({ comments });
    }
  };

  onDeleteComment = (id, commentKey) => {
    const { slug, deleteComment } = this.props;
    deleteComment({ slug, id });
    this.setState({ id, commentKey });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeEditComment = (e) => {
    this.setState({ newComments: { [e.target.name]: { value: e.target.value } } });
  };

  toggleCommentEditor = (key) => {
    const { commentEditor } = this.state;
    this.setState(prevState => ({
      ...prevState,
      commentEditor: { [key]: { display: commentEditor[key] && commentEditor[key].display === 'block' ? 'hide' : 'block' } }
    }));
  };

  closeCommentEditor = (e, key) => {
    e.preventDefault();
    const { commentEditor } = this.state;
    this.setState(prevState => ({
      ...prevState,
      commentEditor: { [key]: { display: commentEditor[key] && commentEditor[key].display === 'block' ? 'hide' : 'block' } }
    }));
  };

  onSubmit = async (e, key, id, userId) => {
    e.preventDefault();
    this.setState({ errors: {} });
    const { isAuth, slug, editComment, profile } = this.props;
    const { newComments, comments } = this.state;
    if (isAuth) {
      if (userId === profile.id) {
        if (newComments && Object.keys(newComments).length) {
          const comment = {
            body: newComments[`comment-${key}`].value,
            slug,
            id,
            userId
          };
          await editComment(comment);
          comments[key].body = newComments[`comment-${key}`].value;
          this.setState({ comments, errors: { message: 'You have edited this comment' } });
        } else {
          this.setState({ errors: { message: 'To submit, you need to edit first' } });
        }
      } else {
        this.setState({ errors: { message: 'You can not edit a comment you did not created' } });
      }
    } else {
      this.setState({ errors: { token: 'Failed to authenticate token' } });
    }
  };

  render() {
    const { loading, isAuth, profile } = this.props;
    const { comments, errors, commentEditor, newComments } = this.state;

    return (
      <div id="wrap-comment-thread">
        {loading ? (
          <BeatLoader
            css={css`
              display: block;
              margin: 0 auto;
              text-align: center;
              border-color: red;
              padding-bottom: 15px;
              margin-bottom: 30px;
            `}
            size={15}
            color="#f9d342"
            loading={loading}
          />
        ) : (
          ''
        )}
        <ul className="list-block comments-wrapper">
          {!loading
            && (comments || []).map((comment, key) => (
              <li key={key}>
                {comment && comment ? (
                  <div>
                    {/* avatar */}
                    <div className="comment-icon hide-on-small">
                      <div className="image">
                        <Img
                          imgSrc={(comment.commentAuthor && comment.commentAuthor.image) || avatar}
                          alt="Profile"
                        />
                      </div>
                    </div>
                    {/* comment body */}
                    <div className="comment-message-wrapper">
                      <div>
                        <Link to="/" className="text-success">
                          {`${comment.commentAuthor.firstName} ${comment.commentAuthor.lastName}`}{' '}
                          {comment.commentAuthor.username || ''}
                        </Link>
                        <br />
                        <div className="text-grey small-v-margin timestamp">
                          {timeStamp(comment.createdAt)}
                        </div>
                      </div>
                      <div className="large-v-padding">{comment.body}</div>
                      {/* comment actions */}
                      <div className="row">
                        <span className="small-screen-4 medium-screen-4 large-screen-2">
                          <button className="light text-black">
                            <FontAwesomeIcon icon={faThumbsUp} className="text-grey" />
                            &nbsp; likes
                          </button>
                        </span>
                        {isAuth && profile.id === comment.userId ? (
                          <span className="small-screen-4 medium-screen-4 large-screen-2 right-align">
                            <button className="light text-black">
                              <FontAwesomeIcon icon={faClock} className="text-grey" />
                              &nbsp; Edit History
                            </button>
                            <button
                              onClick={() => this.toggleCommentEditor(key)}
                              className="success text-white"
                            >
                              <FontAwesomeIcon icon={faPenAlt} />
                              &nbsp; Edit
                            </button>
                            <button
                              onClick={() => {
                                // eslint-disable-next-line no-alert
                                if (window.confirm('Are you sure you want to delete this comment?')) this.onDeleteComment(comment.id, key);
                              }}
                              className="danger text-white"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                              &nbsp; Delete
                            </button>
                          </span>
                        ) : (
                          ''
                        )}
                      </div>
                      <div className="divider white" />
                      <div
                        className={`comment-editor ${(commentEditor[key]
                          && commentEditor[key].display)
                          || 'hide'}`}
                      >
                        <form onSubmit={e => this.onSubmit(e, key, comment.id, comment.userId)}>
                          <div>Edit this comment</div>
                          <div className="input-field">
                            <TextareaAutosize
                              name={`comment-${key}`}
                              placeholder="Edit your comment here..."
                              onChange={this.onChangeEditComment}
                              value={
                                (newComments[`comment-${key}`]
                                  && newComments[`comment-${key}`].value)
                                || comment.body
                              }
                              id={`edit-comment-${key}`}
                              style={{ minHeight: 12, fontSize: 14 }}
                              className="shadow-1"
                            />
                          </div>
                          <div className="input-field">
                            <button
                              onSubmit={this.onSubmit}
                              type="submit"
                              className="button success text-white radius-5"
                            >
                              Update
                            </button>
                            <button
                              onClick={e => this.closeCommentEditor(e, key)}
                              className="button white text-black radius-5 border b-grey"
                            >
                              Cancel
                            </button>
                            {loading ? (
                              <span className="medium-padding radius-5">loading</span>
                            ) : (
                              ''
                            )}
                            {errors && errors.message ? (
                              <span className="medium-padding radius-5 text-danger">
                                {errors.message}
                              </span>
                            ) : (
                              ''
                            )}
                          </div>
                        </form>
                      </div>
                      <div className="divider white" />
                    </div>
                    <div className="divider white" />
                  </div>
                ) : (
                  ''
                )}
              </li>
            ))}
          <div>
            {!loading && comments && !comments.length > 0 ? (
              <div className="center-align">
                <FontAwesomeIcon
                  icon={faCommentAlt}
                  className="text-light-grey fa-4x center-align"
                />
                <h2 className="center-align large-v-padding">No comment yet</h2>
              </div>
            ) : (
              ''
            )}
          </div>
        </ul>
        <div className="clear" />
      </div>
    );
  }
}

CommentThread.propTypes = {
  fetchComments: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
  profile: PropTypes.object,
  comments: PropTypes.array,
  comment: PropTypes.object,
  slug: PropTypes.string,
  rating: PropTypes.number,
  params: PropTypes.object,
  match: PropTypes.object,
  loading: PropTypes.bool,
  deleted: PropTypes.any,
  message: PropTypes.bool
};
const mapStateToProps = ({
  user: { isAuth, profile },
  comments: {
    deleteComment: { message, deleted },
    fetchComments: { comments, errors }
  }
}) => ({ isAuth, profile, comments, message, errors, deleted });

export default connect(
  mapStateToProps,
  { fetchComments, deleteComment, editComment }
)(CommentThread);

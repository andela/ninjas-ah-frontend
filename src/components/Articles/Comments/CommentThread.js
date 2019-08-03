import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import TextareaAutosize from 'react-autosize-textarea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faClock,
  faPenAlt,
  faTrash,
  faCommentAlt,
  faHistory
} from '@fortawesome/free-solid-svg-icons';
import { css } from '@emotion/core';
import { fetchComments, deleteComment, editComment, getCommentHistory } from '../../../actions';
import { Img } from '../../common';
import timeStamp from '../../../helpers/timeStamp';
import avatar from '../../../assets/images/profile_plaholder.png';
import './Comments.scss';

export class CommentThread extends Component {
  state = {
    comments: [],
    slug: '',
    body: '',
    commentEditor: {},
    commentEditorHistory: {},
    newComments: {},
    commentHistory: {},
    popHistory: false,
    editHistoryData: { currentBody: '' }
  };

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
    if (nextProps.editCommentHistory && nextProps.editCommentHistory.length) {
      this.setState(prevState => ({
        ...prevState,
        commentHistory: nextProps.editCommentHistory
      }));
    }
  };

  onDeleteComment = (id, commentKey) => {
    const { slug, deleteComment } = this.props;
    deleteComment({ slug, id });
    this.setState({ id, commentKey });
  };

  onChangeEditComment = (e) => {
    this.setState({ newComments: { [e.target.name]: { value: e.target.value } } });
  };

  toggleCommentEditor = (key) => {
    const { commentEditor, commentEditorHistory } = this.state;
    this.setState(prevState => ({
      ...prevState,
      commentEditor: { [key]: { display: commentEditor[key] && commentEditor[key].display === 'block' ? 'hide' : 'block' } },
      commentHistory: '',
      commentEditorHistory: {
        [key]: {
          display:
            commentEditorHistory[key] && commentEditorHistory[key].display === 'block'
              ? 'hide'
              : 'block'
        }
      }
    }));
  };

  toggleCommentHistory = (key, commentId) => {
    const { commentEditorHistory } = this.state;
    const { getCommentHistory } = this.props;
    this.setState(prevState => ({
      ...prevState,
      commentHistory: '',
      commentEditorHistory: {
        [key]: {
          display:
            commentEditorHistory[key] && commentEditorHistory[key].display === 'block'
              ? 'hide'
              : 'block'
        }
      }
    }));
    getCommentHistory(this.props.slug, commentId);
  };

  closeCommentEditor = (e, key) => {
    e.preventDefault();
    const { commentEditor, commentEditorHistory } = this.state;
    this.setState(prevState => ({
      ...prevState,
      commentEditor: { [key]: { display: commentEditor[key] && commentEditor[key].display === 'block' ? 'hide' : 'block' } },
      commentHistory: '',
      commentEditorHistory: {
        [key]: {
          display:
            commentEditorHistory[key] && commentEditorHistory[key].display === 'block'
              ? 'hide'
              : 'block'
        }
      }
    }));
  };

  onSubmit = (e, key, id, userId) => {
    e.preventDefault();
    this.setState({ errors: {} });
    const { isAuth, slug, editComment, profile } = this.props;
    const { newComments, comments } = this.state;
    if (!isAuth) {
      this.setState({ errors: { token: 'Failed to authenticate token' } });
      return false;
    }
    if (userId !== profile.id) {
      this.setState({ errors: { message: 'You can not edit a comment you did not created' } });
      return false;
    }

    if (newComments && Object.keys(newComments).length) {
      const comment = {
        body: newComments[`comment-${key}`].value,
        slug,
        id,
        userId
      };
      editComment(comment);
      comments[key].body = newComments[`comment-${key}`].value;
      this.setState({ comments, errors: { message: 'You have edited this comment' } });
    } else {
      this.setState({ errors: { message: 'To submit, you need to edit first' } });
    }
    return true;
  };

  render() {
    const { loading, isAuth, profile, historyLoading } = this.props;
    const {
      comments,
      errors,
      commentEditor,
      newComments,
      commentHistory,
      commentEditorHistory
    } = this.state;

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
                        {comment.commentAuthor && comment.commentAuthor.firstName ? (
                          <span className="bold text-success">
                            {comment.commentAuthor.firstName}
                          </span>
                        ) : (
                            <span className="bold text-success">{profile.firstName}</span>
                          )}
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
                            <button
                              type="button"
                              onClick={() => this.toggleCommentHistory(key, comment.id)}
                              id="toggle-history"
                              className="light text-black "
                            >
                              <FontAwesomeIcon icon={faClock} className="text-grey" />
                              &nbsp; Edit History
                            </button>
                            <button
                              id="toggle-comment"
                              onClick={() => this.toggleCommentEditor(key)}
                              className="success text-white"
                            >
                              <FontAwesomeIcon icon={faPenAlt} />
                              &nbsp; Edit
                            </button>
                            <button
                              id="delete-comment"
                              onClick={() => {
                                this.onDeleteComment(comment.id, key);
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
                        className={`wrap-comment-history ${(commentEditorHistory[key]
                          && commentEditorHistory[key].display)
                          || 'hide'}`}
                      >
                        {commentHistory
                          && commentHistory.length
                          && (commentHistory || []).map((history, key) => (
                            <div className="comment-history" key={key}>
                              <FontAwesomeIcon
                                icon={faHistory}
                                className="icon-history text-grey"
                              />
                              <div className="medium-padding border b-light-grey radius-2">
                                {history.body}
                              </div>
                              <div className="text-grey medium-v-padding">
                                Edited: <span className="bold">{timeStamp(history.createdAt)}</span>
                              </div>
                            </div>
                          ))}
                        {historyLoading ? (
                          <div className="center-align bold medium-text">
                            Loading comment history...
                          </div>
                        ) : (
                            ''
                          )}
                        {!historyLoading && !commentHistory ? (
                          <div className="center-align bold medium-text">
                            You did not edit this comment yet!
                          </div>
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
                        <form
                          id="submit-comment"
                          onSubmit={e => this.onSubmit(e, key, comment.id, comment.userId)}
                        >
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
                              id="close-comment-editor"
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

CommentThread.defaultProps = { historyLoading: false };

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
  message: PropTypes.string,
  historyLoading: PropTypes.bool,
  getCommentHistory: PropTypes.func.isRequired,
  editCommentHistory: PropTypes.array,
  commentEditorHistory: PropTypes.bool,
};
const mapStateToProps = ({
  user: { isAuth, profile },
  comments: {
    deleteComment: { message, deleted },
    fetchComments: { comments, errors },
    getCommentHistory: { editCommentHistory, historyLoading }
  }
}) => ({ isAuth, profile, comments, message, errors, deleted, editCommentHistory, historyLoading });

export default connect(
  mapStateToProps,
  { fetchComments, deleteComment, editComment, getCommentHistory }
)(CommentThread);

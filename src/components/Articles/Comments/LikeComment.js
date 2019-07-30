import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { likeComment, getLikesComment } from '../../../actions';

export class LikeComment extends Component {
  state = {
    likeClicked: false,
    hasLiked: false,
    likes: 0
  };

  componentWillReceiveProps = (nextProps) => {
    const { comment, commentLikes, profile } = nextProps;
    (commentLikes || []).map(commentLike => (comment.id === parseInt(commentLike.commentId, 10)
      ? this.setState(prevState => ({
        ...prevState,
        likes: commentLike.number,
        hasLiked: commentLike.whoLiked.includes(profile.id)
      }))
      : ''));
  };

  componentWillMount = () => {
    const { comment, getLikesComment } = this.props;
    getLikesComment(comment);
  };

  handleCommentLike = (comment) => {
    const { likeComment } = this.props;
    likeComment(comment, 'like');
  };

  render() {
    const { likeClicked, likes, hasLiked } = this.state;
    const { comment } = this.props;

    return (
      <button
        className={likeClicked ? 'light-red text-black' : 'light text-black'}
        onClick={() => this.handleCommentLike(comment)}
      >
        <FontAwesomeIcon
          icon={faThumbsUp}
          className={hasLiked ? 'text-danger' : 'text-grey'}
          size="1x"
        />
        &nbsp; {likes <= 1 ? <span>{likes} like</span> : <span>{likes} likes</span>}
      </button>
    );
  }
}

LikeComment.defaultProps = { whoLiked: [], profile: {} };

LikeComment.propTypes = {
  comment: PropTypes.object.isRequired,
  likeComment: PropTypes.func.isRequired,
  getLikesComment: PropTypes.func.isRequired,
  numberOfLikes: PropTypes.number,
  commentLikes: PropTypes.array,
  whoLiked: PropTypes.array,
  profile: PropTypes.object
};
const mapStateToProps = ({
  user: { isAuth, profile },
  comments: {
    deleteComment: { message, deleted },
    fetchComments: { comments, errors },
    allComments,
    commentLikes
  }
}) => ({
  isAuth,
  profile,
  comments,
  message,
  errors,
  deleted,
  allComments,
  commentLikes
});

export default connect(
  mapStateToProps,
  { likeComment, getLikesComment }
)(LikeComment);

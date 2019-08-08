import { comments as initialState } from '../../store/initialState';
import fetchCommentsReducer from './fetchCommentsReducer';
import createCommentReducer from './createCommentReducer';
import deleteCommentReducer from './deleteCommentReducer';
import editCommentReducer from './editCommentReducer';
import editCommentHistory from './editCommentHistory';
import likeCommentReducer from './likeComment';
import getCommentsLikesReducer from './getLikeComment';

export default (state = initialState, action) => {
  const fetchComments = fetchCommentsReducer(state, action);
  const createComment = createCommentReducer(state, action);
  const deleteComment = deleteCommentReducer(state, action);
  const editComment = editCommentReducer(state, action);
  const editHistory = editCommentHistory(state, action);
  const likeComment = likeCommentReducer(state, action);
  const getLikeComment = getCommentsLikesReducer(state, action);

  return (
    fetchComments
    || createComment
    || deleteComment
    || editComment
    || likeComment
    || getLikeComment
    || editHistory
    || state
  );
};

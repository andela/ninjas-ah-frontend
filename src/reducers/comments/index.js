import { comments as initialState } from '../../store/initialState';
import fetchCommentsReducer from './fetchCommentsReducer';
import createCommentReducer from './createCommentReducer';
import deleteCommentReducer from './deleteCommentReducer';

export default (state = initialState, action) => {
  const fetchComments = fetchCommentsReducer(state, action);
  const createComment = createCommentReducer(state, action);
  const deleteComment = deleteCommentReducer(state, action);
  return fetchComments || createComment || deleteComment || state;
};

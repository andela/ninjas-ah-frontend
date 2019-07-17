import { comments as initialState } from '../../store/initialState';
import fetchCommentsReducer from './fetchCommentsReducer';
import createCommentsReducer from './createCommentsReducer';

export default (state = initialState, action) => {
  const fetchComments = fetchCommentsReducer(state, action);
  const createComment = createCommentsReducer(state, action);
  return fetchComments || createComment || state;
};

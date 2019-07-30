import fetchCommentsReducer from '../../../reducers/comments/fetchCommentsReducer';
import initialState from '../../../store/initialStates/commentsInitialState';
import { commentsActionsTypes } from '../../../actions-types';
import { newComment } from '../../../__mocks__/article';

describe('Comment', () => {
  test('FETCH COMMENT START', () => {
    fetchCommentsReducer(initialState, {
      type: commentsActionsTypes.FETCH_COMMENTS_START,
      payload: {}
    });
  });

  test('FETCH COMMENT SUCCESS', () => {
    fetchCommentsReducer(initialState, {
      type: commentsActionsTypes.FETCH_COMMENTS_SUCCESS,
      payload: { fetchComments: { comments: [newComment] } }
    });
  });

  test('FETCH COMMENT FAILURE', () => {
    fetchCommentsReducer(initialState, {
      type: commentsActionsTypes.FETCH_COMMENTS_FAILURE,
      payload: { errors: '-----' }
    });
  });

  test('FETCH COMMENT FAILURE', () => {
    fetchCommentsReducer(initialState, {
      type: commentsActionsTypes.FETCH_COMMENTS_END,
      payload: { loading: false }
    });
  });
});

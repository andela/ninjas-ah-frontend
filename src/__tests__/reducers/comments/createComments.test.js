import createCommentReducer from '../../../reducers/comments/createCommentReducer';
import editCommentHistory from '../../../reducers/comments/editCommentHistory';
import initialState from '../../../store/initialStates/commentsInitialState';
import { commentsActionsTypes } from '../../../actions-types';
import { newComment } from '../../../__mocks__/article';

describe('Comment', () => {
  test('CREATE COMMENT START', () => {
    createCommentReducer(initialState, {
      type: commentsActionsTypes.CREATE_COMMENT_START,
      payload: {}
    });
  });

  test('CREATE COMMENT SUCCESS', () => {
    createCommentReducer(initialState, {
      type: commentsActionsTypes.CREATE_COMMENT_SUCCESS,
      payload: { fetchComments: { comments: [newComment] } }
    });
  });

  test('CREATE COMMENT FAILURE', () => {
    createCommentReducer(initialState, {
      type: commentsActionsTypes.CREATE_COMMENT_FAILURE,
      payload: { createComment: { errors: '-----' } }
    });
  });

  test('CREATE COMMENT FAILURE', () => {
    createCommentReducer(initialState, {
      type: commentsActionsTypes.CREATE_COMMENT_END,
      payload: { loading: false }
    });
  });
  test('FETCH_COMMENT_EDIT_HISTORY_START', () => {
    editCommentHistory(initialState, {
      type: commentsActionsTypes.FETCH_COMMENT_EDIT_HISTORY_START,
      payload: { getCommentHistory: { historyLoading: true } }
    });
  });
  test('FETCH_COMMENT_EDIT_HISTORY_SUCCESS', () => {
    editCommentHistory(initialState, {
      type: commentsActionsTypes.FETCH_COMMENT_EDIT_HISTORY_SUCCESS,
      payload: { getCommentHistory: { editCommentHistory: 'data', historyLoading: false } }
    });
  });
  test('FETCH_COMMENT_EDIT_HISTORY_FAILURE', () => {
    editCommentHistory(initialState, {
      type: commentsActionsTypes.FETCH_COMMENT_EDIT_HISTORY_FAILURE,
      payload: { errors: 'server not found', getCommentHistory: { historyLoading: false } }
    });
  });
  test('FETCH_COMMENT_EDIT_HISTORY_END', () => {
    editCommentHistory(initialState, {
      type: commentsActionsTypes.FETCH_COMMENT_EDIT_HISTORY_END,
      payload: { getCommentHistory: { historyLoading: false } }
    });
  });
});

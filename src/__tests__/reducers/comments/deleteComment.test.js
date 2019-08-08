import deleteCommentReducer from '../../../reducers/comments/deleteCommentReducer';
import initialState from '../../../store/initialStates/commentsInitialState';
import { commentsActionsTypes } from '../../../actions-types';
import { newComment } from '../../../__mocks__/article';

describe('Comment', () => {
  test('DELETE COMMENT START', () => {
    deleteCommentReducer(initialState, {
      type: commentsActionsTypes.DELETE_COMMENT_START,
      payload: {}
    });
  });

  test('DELETE COMMENT SUCCESS', () => {
    deleteCommentReducer(initialState, {
      type: commentsActionsTypes.DELETE_COMMENT_SUCCESS,
      payload: { deleteComment: { message: 'comment deleted' } }
    });
  });

  test('DELETE COMMENT FAILURE', () => {
    deleteCommentReducer(initialState, {
      type: commentsActionsTypes.DELETE_COMMENT_FAILURE,
      payload: { deleteComment: { errors: 'message not deleted' } }
    });
  });

  test('DELETE COMMENT FAILURE', () => {
    deleteCommentReducer(initialState, {
      type: commentsActionsTypes.DELETE_COMMENT_END,
      payload: { loading: false }
    });
  });
});

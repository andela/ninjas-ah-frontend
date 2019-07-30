import createCommentReducer from '../../../reducers/comments/createCommentReducer';
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
});

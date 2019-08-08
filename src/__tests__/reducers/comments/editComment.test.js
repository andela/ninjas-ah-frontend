import editCommentReducer from '../../../reducers/comments/editCommentReducer';
import initialState from '../../../store/initialStates/commentsInitialState';
import { commentsActionsTypes } from '../../../actions-types';
import { newComment } from '../../../__mocks__/article';

describe('Comment', () => {
  test('EDIT COMMENT START', () => {
    editCommentReducer(initialState, {
      type: commentsActionsTypes.EDIT_COMMENT_START,
      payload: {}
    });
  });

  test('EDIT COMMENT SUCCESS', () => {
    editCommentReducer(initialState, {
      type: commentsActionsTypes.EDIT_COMMENT_SUCCESS,
      payload: { fetchComments: { comments: [newComment] } }
    });
  });

  test('EDIT COMMENT FAILURE', () => {
    editCommentReducer(initialState, {
      type: commentsActionsTypes.EDIT_COMMENT_FAILURE,
      payload: { editComment: { errors: '-----' } }
    });
  });

  test('EDIT COMMENT FAILURE', () => {
    editCommentReducer(initialState, {
      type: commentsActionsTypes.EDIT_COMMENT_END,
      payload: { loading: false }
    });
  });
});

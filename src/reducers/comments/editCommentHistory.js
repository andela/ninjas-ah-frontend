import { commentsActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case commentsActionsTypes.FETCH_COMMENT_EDIT_HISTORY_START:
      return {
        ...state,
        getCommentHistory: { historyLoading: true, errors: {} }
      };
    case commentsActionsTypes.FETCH_COMMENT_EDIT_HISTORY_SUCCESS:
      return {
        ...state,
        getCommentHistory: {
          historyLoading: false,
          ...state.editCommentHistory,
          ...{ editCommentHistory: payload.history }
        }
      };
    case commentsActionsTypes.FETCH_COMMENT_EDIT_HISTORY_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, ...payload.errors },
        historyLoading: false
      };
    case commentsActionsTypes.FETCH_COMMENT_EDIT_HISTORY_END:
      return {
        ...state,
        getCommentHistory: { ...state.editCommentHistory, historyLoading: false }
      };
    default:
      return null;
  }
};

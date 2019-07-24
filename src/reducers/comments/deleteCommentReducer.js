import { commentsActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case commentsActionsTypes.DELETE_COMMENT_START:
      return {
        ...state,
        deleteComment: { loading: true, errors: {} }
      };
    case commentsActionsTypes.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        deleteComment: { message: payload.message, deleted: true }
      };
    case commentsActionsTypes.DELETE_COMMENT_FAILURE:
      return {
        ...state,

        deleteComment: { errors: { message: payload.message } },
        loading: false
      };
    case commentsActionsTypes.DELETE_COMMENT_END:
      return {
        ...state,
        deleteComment: { ...state.createComment, loading: false }
      };
    default:
      return null;
  }
};

import { commentsActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case commentsActionsTypes.EDIT_COMMENT_START:
      return {
        ...state,
        editComment: { loading: true, errors: {} }
      };
    case commentsActionsTypes.EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        fetchComments: {
          comments: [payload.comment, ...state.fetchComments.comments],
          message: payload.message
        }
      };
    case commentsActionsTypes.EDIT_COMMENT_FAILURE:
      return {
        ...state,
        editComment: { errors: payload.errors },
        loading: false
      };
    case commentsActionsTypes.EDIT_COMMENT_END:
      return {
        ...state,
        editComment: { ...state.editComment, loading: false }
      };
    default:
      return null;
  }
};

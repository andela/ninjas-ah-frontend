import { commentsActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case commentsActionsTypes.CREATE_COMMENT_START:
      return {
        ...state,
        createComment: { loading: true, errors: {} }
      };
    case commentsActionsTypes.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        fetchComments: {
          comments: [payload.comment, ...state.fetchComments.comments],
          message: payload.message
        }
      };
    case commentsActionsTypes.CREATE_COMMENT_FAILURE:
      return {
        ...state,

        createComment: { errors: { message: payload.message } },
        loading: false
      };
    case commentsActionsTypes.CREATE_COMMENT_END:
      return {
        ...state,
        createComment: { ...state.createComment, loading: false }
      };
    default:
      return null;
  }
};

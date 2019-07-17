import { commentsActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case commentsActionsTypes.FETCH_COMMENTS_START:
      return {
        ...state,
        fetchComments: { loading: true, errors: {} }
      };
    case commentsActionsTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        fetchComments: { ...state.comments, ...{ comments: payload.comments } }
      };
    case commentsActionsTypes.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, ...payload.errors },
        loading: false
      };
    case commentsActionsTypes.FETCH_COMMENTS_END:
      return {
        ...state,
        fetchComments: { ...state.fetchComments, loading: false }
      };
    default:
      return null;
  }
};

import { followActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case followActionsTypes.FOLLOW_AUTHOR_START:
      return {
        ...state,
        loading: true
      };
    case followActionsTypes.FOLLOW_AUTHOR_SUCCESS:
      return {
        ...state,
        following: [...state.following, payload.follow]
      };
    case followActionsTypes.FOLLOW_AUTHOR_FAILURE:
      return { ...state, loading: false, message: '', errors: { ...payload.errors } };
    case followActionsTypes.FOLLOW_AUTHOR_END:
      return {
        ...state,
        loading: false
      };
    default:
      return null;
  }
};

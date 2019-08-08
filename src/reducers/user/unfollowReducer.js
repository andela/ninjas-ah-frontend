import { followActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case followActionsTypes.UNFOLLOW_AUTHOR_START:
      return {
        ...state,
        loading: true
      };
    case followActionsTypes.UNFOLLOW_AUTHOR_SUCCESS:
      return {
        ...state,
        following: state.following.filter(val => val.followed !== payload.followed)
      };
    case followActionsTypes.UNFOLLOW_AUTHOR_FAILURE:
      return {
        ...state,
        loading: false,
        message: '',
        errors: { ...payload.errors }
      };
    case followActionsTypes.UNFOLLOW_AUTHOR_END:
      return {
        ...state,
        loading: false
      };
    default:
      return null;
  }
};

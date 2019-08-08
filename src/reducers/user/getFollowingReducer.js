import { followActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case followActionsTypes.GET_FOLLOWING_START:
      return {
        ...state,
        loading: true
      };
    case followActionsTypes.GET_FOLLOWING_SUCCESS:
      return {
        ...state,
        following: payload.following
      };
    case followActionsTypes.GET_FOLLOWING_FAILURE:
      return {
        ...state,
        loading: false,
        message: '',
        errors: { ...payload.errors }
      };
    case followActionsTypes.GET_FOLLOWING_END:
      return {
        ...state,
        loading: false
      };
    default:
      return null;
  }
};

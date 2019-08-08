import { followActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case followActionsTypes.GET_FOLLOWERS_START:
      return {
        ...state,
        loading: true
      };
    case followActionsTypes.GET_FOLLOWERS_SUCCESS:
      return {
        ...state,
        followers: { ...payload }
      };
    case followActionsTypes.GET_FOLLOWERS_FAILURE:
      return {
        ...state,
        followers: { ...payload.errors }
      };
    case followActionsTypes.GET_FOLLOWERS_END:
      return {
        ...state,
        loading: false
      };
    default:
      return null;
  }
};

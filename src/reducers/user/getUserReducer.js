import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.GET_USER_START:
      return {
        ...state,
        getUser: { ...state.getUser, message: '', loading: true, errors: {} }
      };
    case userActionsTypes.GET_USER_END:
      return {
        ...state,
        getUser: { ...state.getUser, loading: false }
      };
    case userActionsTypes.GET_USER_SUCCESS:
      return {
        ...state,
        currentUser: payload.user,
        getUser: {
          ...state.getUser,
          loading: false,
          message: payload.message,
          errors: {}
        }
      };
    case userActionsTypes.GET_USER_FAILURE:
      return {
        ...state,
        getUser: { ...state.getUser, loading: false, message: '', errors: { ...payload.errors } }
      };
    default:
      return null;
  }
};

import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.LOGOUT_USER_START:
      return {
        ...state,
        logout: { ...state.logout, message: '', loading: true, errors: {} }
      };
    case userActionsTypes.LOGOUT_USER_END:
      return {
        ...state,
        logout: { ...state.logout, loading: false }
      };
    case userActionsTypes.LOGOUT_USER_SUCCESS:
      localStorage.clear();
      window.location.replace('/');
      return {
        ...state,
        profile: {},
        isAuth: false,
        logout: { loading: false, message: payload.message, errors: {} }
      };
    case userActionsTypes.LOGOUT_USER_FAILURE:
      localStorage.clear();
      window.location.replace('/');
      return {
        ...state,
        logout: { loading: false, message: '', errors: { ...payload.errors } }
      };
    default:
      return null;
  }
};

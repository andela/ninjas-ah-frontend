import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.LOGIN_USER_START:
      return {
        ...state,
        login: { ...state.login, message: '', loading: true, errors: {} }
      };
    case userActionsTypes.LOGIN_USER_END:
      return {
        ...state,
        login: { ...state.login, loading: false }
      };
    case userActionsTypes.LOGIN_USER_SUCCESS:
      localStorage.user = JSON.stringify(payload.user);
      localStorage.token = payload.token;
      return {
        ...state,
        isAuth: true,
        profile: payload.user,
        token: payload.token,
        login: { loading: false, message: payload.message, errors: {} }
      };
    case userActionsTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        login: { loading: false, message: '', errors: { ...payload.errors } }
      };
    default:
      return null;
  }
};

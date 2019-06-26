import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.GET_USER_START:
      return {
        ...state,
        getUser: { ...state.getUser, loading: true, errors: {} }
      };
    case userActionsTypes.GET_USER_END:
      return {
        ...state,
        getUser: { ...state.getUser, loading: false }
      };
    case userActionsTypes.GET_USER_SUCCESS:
      localStorage.user = JSON.stringify(payload.user);
      localStorage.token = payload.token || localStorage.token;
      return {
        ...state,
        isAuth: true,
        profile: { ...state.profile, ...payload.user },
        getUser: { loading: false, message: payload.message, errors: {} }
      };
    case userActionsTypes.GET_USER_FAILURE:
      return {
        ...state,
        getUser: { loading: false, message: '', errors: { ...payload.errors } }
      };
    default:
      return null;
  }
};

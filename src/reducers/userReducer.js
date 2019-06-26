import { user as initialState } from '../store/initialState';
import { userActionsTypes } from '../actions-types';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionsTypes.GET_USER_SUCCESS:
      localStorage.user = JSON.stringify(payload.user);
      localStorage.token = payload.token || localStorage.token;
      return {
        ...state,
        profile: { ...state.profile, ...payload.user },
        getUser: { message: payload.message, errors: {} }
      };
    case userActionsTypes.GET_USER_FAILURE:
      return {
        ...state,
        getUser: { message: '', errors: { ...payload.errors } }
      };
    case userActionsTypes.SIGNUP_USER_SUCCESS:
      localStorage.user = JSON.stringify(payload.user);
      return {
        ...state,
        profile: payload.user,
        signup: { message: payload.message, errors: {} }
      };
    case userActionsTypes.SIGNUP_USER_FAILURE:
      return {
        ...state,
        signup: { message: '', errors: { ...payload.errors } }
      };
    default:
      return state;
  }
};

import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.SIGNUP_USER_START:
      return {
        ...state,
        signup: { ...state.signup, message: '', loading: true, errors: {} }
      };
    case userActionsTypes.SIGNUP_USER_END:
      return {
        ...state,
        signup: { ...state.signup, loading: false }
      };
    case userActionsTypes.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        profile: payload.user,
        signup: { loading: false, message: payload.message, errors: {} }
      };
    case userActionsTypes.SIGNUP_USER_FAILURE:
      return {
        ...state,
        signup: { loading: false, message: '', errors: { ...payload.errors } }
      };
    default:
      return null;
  }
};

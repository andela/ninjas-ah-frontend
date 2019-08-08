import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.FORGOT_PASSWORD_START:
      return {
        ...state,
        forgotPassword: { ...state.forgotPassword, message: '', loading: true, errors: {} }
      };
    case userActionsTypes.FORGOT_PASSWORD_END:
      return {
        ...state,
        forgotPassword: { ...state.forgotPassword, message: '', loading: false, errors: {} }
      };
    case userActionsTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: { loading: true, message: payload.message, errors: {} }
      };
    case userActionsTypes.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotPassword: {
          loading: false,
          message: '',
          errors: { message: payload.errors || payload.message }
        }
      };
    default:
      return null;
  }
};

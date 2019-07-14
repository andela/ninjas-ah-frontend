import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.FORGOT_PASSWORD_START:
      return {
        ...state,
        forgotPassword: { ...state.forgotPassword, loading: true, errors: {} }
      };
    case userActionsTypes.FORGOT_PASSWORD_END:
      return {
        ...state,
        forgotPassword: { ...state.forgotPassword, loading: false }
      };
    case userActionsTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: { loading: true, message: payload.message, errors: {} }
      };
    case userActionsTypes.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotPassword: { loading: false, message: '', errors: { ...payload.errors } }
      };
    case userActionsTypes.RESET_PASSWORD_START:
      return {
        ...state,
        updatePassword: { ...state.updatePassword, loading: true, errors: {} }
      };
    case userActionsTypes.RESET_PASSWORD_END:
      return {
        ...state,
        updatePassword: { ...state.updatePassword, loading: false }
      };
    case userActionsTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        updatePassword: { loading: true, message: payload.message, errors: {} }
      };
    case userActionsTypes.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        updatePassword: { loading: false, message: '', errors: { ...payload.errors } }
      };
    default:
      return state;
  }
};

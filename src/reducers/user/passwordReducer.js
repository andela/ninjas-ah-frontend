import { passwordAction } from '../../actions-types/User';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case passwordAction.FORGOT_PASSWORD_INITIALIZED:
      return { ...state, ...payload };
    case passwordAction.FORGOT_PASSWORD_SUCCESS:
      return { ...state, ...payload };
    case passwordAction.FORGOT_PASSWORD_ERROR:
      return { ...state, ...payload };
    case passwordAction.RESET_PASSWORD_INITIALIZED:
      return { ...state, ...payload };
    case passwordAction.RESET_PASSWORD_SUCCESS:
      return { ...state, ...payload };
    case passwordAction.RESET_PASSWORD_ERROR:
      return { ...state, ...payload };
    default:
      return state;
  }
};

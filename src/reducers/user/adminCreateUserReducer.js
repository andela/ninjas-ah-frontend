import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.ADMIN_CREATE_USER_START:
      return {
        ...state,
        adminCreateUser: { ...state.adminCreateUser, message: '', loading: true, errors: {} }
      };
    case userActionsTypes.ADMIN_CREATE_USER_END:
      return {
        ...state,
        adminCreateUser: { ...state.adminCreateUser, loading: false }
      };
    case userActionsTypes.ADMIN_CREATE_USER_SUCCESS:
      return {
        ...state,
        adminCreateUser: { loading: false, message: payload.message, errors: {} }
      };
    case userActionsTypes.ADMIN_CREATE_USER_FAILURE:
      return {
        ...state,
        adminCreateUser: { loading: false, message: '', errors: { ...payload.errors } }
      };
    default:
      return null;
  }
};

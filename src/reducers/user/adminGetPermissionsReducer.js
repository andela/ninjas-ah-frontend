import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.ADMIN_GET_PERMISSIONS_START:
      return {
        ...state,
        adminGetPermissions: {
          ...state.adminGetPermissions,
          message: '',
          loading: true,
          errors: {}
        }
      };
    case userActionsTypes.ADMIN_GET_PERMISSIONS_END:
      return {
        ...state,
        adminGetPermissions: { ...state.adminGetPermissions, loading: false }
      };
    case userActionsTypes.ADMIN_GET_PERMISSIONS_SUCCESS:
      return {
        ...state,
        adminGetPermissions: {
          loading: false,
          permissions: payload.permissions,
          message: payload.message,
          errors: {}
        }
      };
    case userActionsTypes.ADMIN_GET_PERMISSIONS_FAILURE:
      return {
        ...state,
        adminGetPermissions: { loading: false, message: '', errors: { ...payload.errors } }
      };
    default:
      return null;
  }
};

import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.ADMIN_GET_USERS_START:
      return {
        ...state,
        getUsers: {
          ...state.getUsers,
          message: '',
          loading: true,
          errors: {}
        }
      };
    case userActionsTypes.ADMIN_GET_USERS_END:
      return {
        ...state,
        getUsers: { ...state.getUsers, loading: false }
      };
    case userActionsTypes.ADMIN_GET_USERS_SUCCESS:
      return {
        ...state,
        listOfUsers: payload.users,
        getUsers: {
          loading: false,
          message: payload.message,
          errors: {}
        }
      };
    case userActionsTypes.ADMIN_GET_USERS_FAILURE:
      return {
        ...state,
        getUsers: { loading: false, message: '', errors: { ...payload.errors } }
      };
    default:
      return null;
  }
};

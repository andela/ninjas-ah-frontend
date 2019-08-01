import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.DELETE_USER_START:
      return {
        ...state,
        deleteUser: {
          ...state.deleteUser,
          message: '',
          loading: true,
          errors: {}
        }
      };
    case userActionsTypes.DELETE_USER_END:
      return {
        ...state,
        deleteUser: { ...state.deleteUser, loading: false }
      };
    case userActionsTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        listOfUsers: [
          ...state.listOfUsers.map(user => (user.id !== parseInt(payload.userId, 10) && user) || {
            ...user,
            isActive: false
          })
        ],
        deleteUser: {
          loading: false,
          message: payload.message,
          errors: {}
        }
      };
    case userActionsTypes.DELETE_USER_FAILURE:
      return {
        ...state,
        deleteUser: { loading: false, message: '', errors: { ...payload.errors } }
      };
    default:
      return null;
  }
};

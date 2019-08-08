import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.SEARCH_USER_START:
      return {
        ...state,
        searchUser: { ...state.searchUser, message: '', loading: true, errors: {} }
      };
    case userActionsTypes.SEARCH_USER_END:
      return {
        ...state,
        searchUser: { ...state.searchUser, loading: false }
      };
    case userActionsTypes.SEARCH_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        currentUser: (payload.users.length === 1 && payload.users[0]) || [],
        listOfUsers: payload.users,
        searchUser: { loading: false, message: payload.message, errors: {} }
      };
    case userActionsTypes.SEARCH_USER_FAILURE:
      return {
        ...state,
        searchUser: { loading: false, message: '', errors: { ...payload.errors } },
        listOfUsers: []
      };
    default:
      return null;
  }
};

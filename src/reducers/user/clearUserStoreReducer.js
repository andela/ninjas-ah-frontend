import { userActionsTypes } from '../../actions-types';

export default (state, { type }) => {
  switch (type) {
    case userActionsTypes.CLEAR_USER_STORE:
      return {
        ...state,
        signup: {
          loading: false,
          message: '',
          errors: {}
        },
        login: {
          loading: false,
          message: '',
          errors: {}
        },
        logout: {
          loading: false,
          message: '',
          errors: {}
        },
        getUser: {
          loading: false,
          message: '',
          errors: {}
        },
        getUsers: {
          loading: false,
          message: '',
          errors: {}
        },
        searchUser: {
          loading: false,
          message: '',
          errors: {}
        },
        editProfile: {
          loading: false,
          message: '',
          errors: {}
        },
        uploadImage: {
          loading: false,
          image: {},
          errors: {}
        },
        forgotPassword: {
          loading: false,
          message: '',
          errors: {}
        },
        updatePassword: {
          loading: false,
          message: '',
          errors: {}
        },
        adminCreateUser: {
          loading: false,
          message: '',
          errors: {}
        },
        adminGetPermissions: {
          loading: false,
          message: '',
          permissions: [],
          errors: {}
        },
        deleteUser: {
          loading: false,
          message: '',
          errors: {}
        }
      };

    default:
      return null;
  }
};

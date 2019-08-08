import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.EDIT_PROFILE_START:
      return {
        ...state,
        editProfile: { ...state.editProfile, message: '', loading: true, errors: {} }
      };
    case userActionsTypes.EDIT_PROFILE_END:
      return {
        ...state,
        editProfile: { ...state.editProfile, loading: false }
      };
    case userActionsTypes.EDIT_PROFILE_SUCCESS:
      localStorage.user = JSON.stringify({ ...state.profile, ...payload.user });
      return {
        ...state,
        profile: { ...state.profile, ...payload.user },
        isAuth: true,
        editProfile: { loading: false, message: payload.message, errors: {} }
      };
    case userActionsTypes.EDIT_PROFILE_FAILURE:
      return {
        ...state,
        editProfile: { loading: false, message: '', errors: { ...payload.errors } }
      };
    // admin
    case userActionsTypes.ADMIN_EDIT_PROFILE_START:
      return {
        ...state,
        editProfile: { ...state.editProfile, message: '', loading: true, errors: {} }
      };
    case userActionsTypes.ADMIN_EDIT_PROFILE_END:
      return {
        ...state,
        editProfile: { ...state.editProfile, loading: false }
      };
    case userActionsTypes.ADMIN_EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        listOfUsers: [
          ...state.listOfUsers.map(user => (user.id !== parseInt(payload.user.id, 10) && user) || {
            ...user,
            ...payload.user
          })
        ],
        currentUser: payload.user,
        editProfile: { loading: false, message: payload.message, errors: {} }
      };
    case userActionsTypes.ADMIN_EDIT_PROFILE_FAILURE:
      return {
        ...state,
        editProfile: { loading: false, message: '', errors: { ...payload.errors } }
      };
    default:
      return null;
  }
};

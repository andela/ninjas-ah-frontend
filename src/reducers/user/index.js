import { user as initialState } from '../../store/initialState';
import clearUserStoreReducer from './clearUserStoreReducer';
import logoutReducer from './logoutReducer';
import getUserReducer from './getUserReducer';
import socialAuthReducer from './socialAuthReducer';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import editProfileReducer from './editProfileReducer';
import uploadImageReducer from './uploadImageReducer';
import forgotPasswordReducer from './forgotPasswordReducer';
import updatePasswordReducer from './updatePasswordReducer';
import adminCreateUserReducer from './adminCreateUserReducer';
import getUsersReducer from './getUsersReducer';
import adminGetPermissionsReducer from './adminGetPermissionsReducer';
import deleteUserReducer from './deleteUserReducer';
import searchUserReducer from './searchUserReducer';

export default (state = initialState, action) => {
  const clearUserStore = clearUserStoreReducer(state, action);
  const logout = logoutReducer(state, action);
  const getUser = getUserReducer(state, action);
  const socialAuth = socialAuthReducer(state, action);
  const signup = signupReducer(state, action);
  const login = loginReducer(state, action);
  const editProfile = editProfileReducer(state, action);
  const uploadImage = uploadImageReducer(state, action);
  const forgotPassword = forgotPasswordReducer(state, action);
  const updatePassword = updatePasswordReducer(state, action);
  const adminCreateUser = adminCreateUserReducer(state, action);
  const adminGetPermissions = adminGetPermissionsReducer(state, action);
  const getUsers = getUsersReducer(state, action);
  const deleteUser = deleteUserReducer(state, action);
  const searchUser = searchUserReducer(state, action);
  return (
    clearUserStore
    || getUser
    || socialAuth
    || signup
    || editProfile
    || uploadImage
    || login
    || logout
    || forgotPassword
    || updatePassword
    || adminCreateUser
    || getUsers
    || adminGetPermissions
    || deleteUser
    || searchUser
    || state
  );
};

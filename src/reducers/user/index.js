import { user as initialState } from '../../store/initialState';
import getUserReducer from './getUserReducer';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import editProfileReducer from './editProfileReducer';
import uploadImageReducer from './uploadImageReducer';
import forgotPasswordReducer from './forgotPasswordReducer';
import updatePasswordReducer from './updatePasswordReducer';

export default (state = initialState, action) => {
  const getUser = getUserReducer(state, action);
  const signup = signupReducer(state, action);
  const login = loginReducer(state, action);
  const editProfile = editProfileReducer(state, action);
  const uploadImage = uploadImageReducer(state, action);
  const forgotPassword = forgotPasswordReducer(state, action);
  const updatePassword = updatePasswordReducer(state, action);
  return (
    getUser
    || signup
    || editProfile
    || uploadImage
    || login
    || forgotPassword
    || updatePassword
    || state
  );
};

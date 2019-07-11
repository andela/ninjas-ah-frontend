import { user as initialState } from '../../store/initialState';
import getUserReducer from './getUserReducer';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import editProfileReducer from './editProfileReducer';
import uploadImageReducer from './uploadImageReducer';

export default (state = initialState, action) => {
  const getUser = getUserReducer(state, action);
  const signup = signupReducer(state, action);
  const login = loginReducer(state, action);
  const editProfile = editProfileReducer(state, action);
  const uploadImage = uploadImageReducer(state, action);
  return getUser || signup || editProfile || uploadImage || login || state;
};

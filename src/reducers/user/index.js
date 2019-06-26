import { user as initialState } from '../../store/initialState';
import getUserReducer from './getUserReducer';
import signupReducer from './signupReducer';

export default (state = initialState, action) => {
  const getUser = getUserReducer(state, action);
  const signup = signupReducer(state, action);
  return getUser || signup || state;
};

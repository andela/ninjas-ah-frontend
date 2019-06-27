import { user as initialState } from '../../store/initialState';
import getUserReducer from './getUserReducer';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';

export default (state = initialState, action) => {
  const getUser = getUserReducer(state, action);
  const signup = signupReducer(state, action);
  const login = loginReducer(state, action);
  return getUser || signup || login || state;
};

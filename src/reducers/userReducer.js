import { user as initialState } from '../store/initialState';
import { userActionsTypes } from '../actions-types';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionsTypes.GET_PROFILE:
      return {
        ...state,
        profile: payload.profile,
        isAuth: payload.isAuth
      };
    case userActionsTypes.USER_ERRORS:
      return {
        ...state,
        errors: payload
      };
    default:
      return state;
  }
};

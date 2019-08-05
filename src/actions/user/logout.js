import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default () => dispatch => dispatch(apiAction({
  method: 'get',
  url: '/auth/logout',
  onStart: userActionsTypes.LOGOUT_USER_START,
  onEnd: userActionsTypes.LOGOUT_USER_END,
  onSuccess: userActionsTypes.LOGOUT_USER_SUCCESS,
  onFailure: userActionsTypes.LOGOUT_USER_FAILURE
}));

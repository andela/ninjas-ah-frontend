import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default email => dispatch => dispatch(apiAction({
  method: 'post',
  url: '/auth/reset',
  data: { email },
  onStart: userActionsTypes.FORGOT_PASSWORD_START,
  onEnd: userActionsTypes.FORGOT_PASSWORD_END,
  onSuccess: userActionsTypes.FORGOT_PASSWORD_SUCCESS,
  onFailure: userActionsTypes.FORGOT_PASSWORD_FAILURE
}));

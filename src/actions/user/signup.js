import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default formData => dispatch => dispatch(apiAction({
  method: 'post',
  url: '/auth/signup',
  data: { ...formData },
  onStart: userActionsTypes.SIGNUP_USER_START,
  onEnd: userActionsTypes.SIGNUP_USER_END,
  onSuccess: userActionsTypes.SIGNUP_USER_SUCCESS,
  onFailure: userActionsTypes.SIGNUP_USER_FAILURE
}));

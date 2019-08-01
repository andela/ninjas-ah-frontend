import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default formData => dispatch => dispatch(apiAction({
  method: 'post',
  url: '/users',
  data: { ...formData },
  onStart: userActionsTypes.ADMIN_CREATE_USER_START,
  onEnd: userActionsTypes.ADMIN_CREATE_USER_END,
  onSuccess: userActionsTypes.ADMIN_CREATE_USER_SUCCESS,
  onFailure: userActionsTypes.ADMIN_CREATE_USER_FAILURE
}));

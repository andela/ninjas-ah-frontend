import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default userType => dispatch => dispatch(apiAction({
  method: 'get',
  url: `/permissions/${userType || ''}`,
  onStart: userActionsTypes.ADMIN_GET_PERMISSIONS_START,
  onEnd: userActionsTypes.ADMIN_GET_PERMISSIONS_END,
  onSuccess: userActionsTypes.ADMIN_GET_PERMISSIONS_SUCCESS,
  onFailure: userActionsTypes.ADMIN_GET_PERMISSIONS_FAILURE
}));

import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default userId => dispatch => dispatch(apiAction({
  method: 'delete',
  url: `/users/${userId || 0}`,
  onStart: userActionsTypes.DELETE_USER_START,
  onEnd: userActionsTypes.DELETE_USER_END,
  onSuccess: userActionsTypes.DELETE_USER_SUCCESS,
  onFailure: userActionsTypes.DELETE_USER_FAILURE
}));

import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (userId = 0) => dispatch => dispatch(apiAction({
  method: 'get',
  url: `/users/${userId}`,
  onStart: userActionsTypes.GET_USER_START,
  onEnd: userActionsTypes.GET_USER_END,
  onSuccess: userActionsTypes.GET_USER_SUCCESS,
  onFailure: userActionsTypes.GET_USER_FAILURE
}));

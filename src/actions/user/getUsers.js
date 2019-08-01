import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (offset = 0, limit = 10) => dispatch => dispatch(apiAction({
  method: 'get',
  url: `/users?offset=${offset}&limit=${limit + 5}`,
  onStart: userActionsTypes.ADMIN_GET_USERS_START,
  onEnd: userActionsTypes.ADMIN_GET_USERS_END,
  onSuccess: userActionsTypes.ADMIN_GET_USERS_SUCCESS,
  onFailure: userActionsTypes.ADMIN_GET_USERS_FAILURE
}));

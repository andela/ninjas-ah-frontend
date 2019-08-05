import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (username = '') => dispatch => dispatch(apiAction({
  method: 'get',
  url: `/users/username/${username}`,
  onStart: userActionsTypes.SEARCH_USER_START,
  onEnd: userActionsTypes.SEARCH_USER_END,
  onSuccess: userActionsTypes.SEARCH_USER_SUCCESS,
  onFailure: userActionsTypes.SEARCH_USER_FAILURE
}));

import { followActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const getFollowers = () => dispatch => dispatch(apiAction({
  method: 'get',
  url: '/users/followers',
  onStart: followActionsTypes.GET_FOLLOWERS_START,
  onEnd: followActionsTypes.GET_FOLLOWERS_END,
  onSuccess: followActionsTypes.GET_FOLLOWERS_SUCCESS,
  onFailure: followActionsTypes.GET_FOLLOWERS_FAILURE
}));

import { followActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const unfollow = ({ username }) => dispatch => dispatch(apiAction({
  method: 'patch',
  url: `/users/${username}/unfollow`,
  onStart: followActionsTypes.UNFOLLOW_AUTHOR_START,
  onEnd: followActionsTypes.UNFOLLOW_AUTHOR_END,
  onSuccess: followActionsTypes.UNFOLLOW_AUTHOR_SUCCESS,
  onFailure: followActionsTypes.UNFOLLOW_AUTHOR_FAILURE
}));

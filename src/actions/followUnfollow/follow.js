import { followActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default ({ username }) => dispatch => dispatch(apiAction({
  method: 'patch',
  url: `/users/${username}/follow`,
  onStart: followActionsTypes.FOLLOW_AUTHOR_START,
  onEnd: followActionsTypes.FOLLOW_AUTHOR_END,
  onSuccess: followActionsTypes.FOLLOW_AUTHOR_SUCCESS,
  onFailure: followActionsTypes.FOLLOW_AUTHOR_FAILURE
}));

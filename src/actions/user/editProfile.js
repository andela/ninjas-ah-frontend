import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (formData, id) => dispatch => dispatch(apiAction({
  method: 'put',
  url: `/users/${id || ''}`,
  data: { ...formData },
  onStart: userActionsTypes.EDIT_PROFILE_START,
  onEnd: userActionsTypes.EDIT_PROFILE_END,
  onSuccess: userActionsTypes.EDIT_PROFILE_SUCCESS,
  onFailure: userActionsTypes.EDIT_PROFILE_FAILURE
}));

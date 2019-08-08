import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (formData, id) => dispatch => dispatch(apiAction({
  method: 'put',
  url: `/users/${id || ''}`,
  data: { ...formData },
  onStart: id ? userActionsTypes.ADMIN_EDIT_PROFILE_START : userActionsTypes.EDIT_PROFILE_START,
  onEnd: id ? userActionsTypes.ADMIN_EDIT_PROFILE_END : userActionsTypes.EDIT_PROFILE_END,
  onSuccess: id
    ? userActionsTypes.ADMIN_EDIT_PROFILE_SUCCESS
    : userActionsTypes.EDIT_PROFILE_SUCCESS,
  onFailure: id
    ? userActionsTypes.ADMIN_EDIT_PROFILE_FAILURE
    : userActionsTypes.EDIT_PROFILE_FAILURE
}));

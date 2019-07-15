import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (form, token) => dispatch => dispatch(apiAction({
  method: 'patch',
  url: `auth/reset/${token}`,
  data: { ...form },
  onStart: userActionsTypes.RESET_PASSWORD_START,
  onEnd: userActionsTypes.RESET_PASSWORD_END,
  onSuccess: userActionsTypes.RESET_PASSWORD_SUCCESS,
  onFailure: userActionsTypes.RESET_PASSWORD_FAILURE
}));

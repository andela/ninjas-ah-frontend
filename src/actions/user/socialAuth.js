import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (payload = {}) => (dispatch) => {
  localStorage.token = payload.token;
  return dispatch(apiAction({
    method: 'get',
    url: `/auth/${payload.id}`,
    httpOptions: { token: payload.token || undefined },
    onStart: userActionsTypes.SOCIAL_AUTH_START,
    onEnd: userActionsTypes.SOCIAL_AUTH_END,
    onSuccess: userActionsTypes.SOCIAL_AUTH_SUCCESS,
    onFailure: userActionsTypes.SOCIAL_AUTH_FAILURE
  }));
};

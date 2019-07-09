import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (payload = {}) => (dispatch) => {
  localStorage.token = payload.token;
  return dispatch(apiAction({
    method: 'get',
    url: `/auth/${payload.id}`,
    httpOptions: { token: payload.token || undefined },
    onStart: userActionsTypes.GET_USER_START,
    onEnd: userActionsTypes.GET_USER_END,
    onSuccess: userActionsTypes.GET_USER_SUCCESS,
    onFailure: userActionsTypes.GET_USER_FAILURE
  }));
};

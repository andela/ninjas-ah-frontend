import { apiActionsTypes } from '../actions-types';

export default ({
  url = '',
  method = 'GET',
  data = null,
  httpOptions = {},
  onStart = apiActionsTypes.API_REQUEST_START,
  onEnd = apiActionsTypes.API_REQUEST_END,
  onSuccess = apiActionsTypes.API_REQUEST_SUCCESS,
  onFailure = apiActionsTypes.API_REQUEST_FAILURE,
  label = ''
}) => ({
  type: apiActionsTypes.API_REQUEST,
  payload: {
    url,
    method,
    data,
    httpOptions,
    onSuccess,
    onFailure,
    onStart,
    onEnd,
    label
  }
});

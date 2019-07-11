import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default formData => dispatch => dispatch(apiAction({
  method: 'post',
  url: '/upload',
  data: formData,
  onStart: userActionsTypes.UPLOAD_PROFILE_PICTURE_START,
  onEnd: userActionsTypes.UPLOAD_PROFILE_PICTURE_END,
  onSuccess: userActionsTypes.UPLOAD_PROFILE_PICTURE_SUCCESS,
  onFailure: userActionsTypes.UPLOAD_PROFILE_PICTURE_FAILURE
}));

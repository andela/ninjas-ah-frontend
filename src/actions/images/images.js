import { imagesTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export const uploadImage = data => dispatch => dispatch(apiAction({
  data,
  method: 'post',
  url: '/upload',
  onStart: imagesTypes.UPLOAD_IMAGE_START,
  onEnd: imagesTypes.UPLOAD_IMAGE_END,
  onSuccess: imagesTypes.UPLOAD_IMAGE_SUCCESS,
  onFailure: imagesTypes.UPLOAD_IMAGE_FAILURE
}));

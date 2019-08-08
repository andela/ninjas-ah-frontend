import { imagesTypes } from '../actions-types';
import { images as initialState } from '../store/initialState';

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case imagesTypes.UPLOAD_IMAGE_START:
      return {
        ...state,
        uploadImage: { ...state.uploadImage, message: '', loading: true, errors: {} }
      };
    case imagesTypes.UPLOAD_IMAGE_END:
      return {
        ...state,
        uploadImage: { ...state.uploadImage, loading: false }
      };
    case imagesTypes.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        uploadImage: { loading: false, image: payload.image, errors: {} }
      };
    case imagesTypes.UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        uploadImage: {
          loading: false,
          image: {},
          errors: { ...payload.errors, message: payload.message }
        }
      };
    default:
      return state;
  }
}

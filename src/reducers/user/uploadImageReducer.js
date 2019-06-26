import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.UPLOAD_PROFILE_PICTURE_START:
      return {
        ...state,
        uploadImage: { ...state.uploadImage, message: '', loading: true, errors: {} },
        editProfile: { ...state.editProfile, message: '', loading: true, errors: {} }
      };
    case userActionsTypes.UPLOAD_PROFILE_PICTURE_END:
      return {
        ...state,
        uploadImage: { ...state.uploadImage, loading: false },
        editProfile: { ...state.editProfile, message: '', loading: false, errors: {} }
      };
    case userActionsTypes.UPLOAD_PROFILE_PICTURE_SUCCESS:
      return {
        ...state,
        uploadImage: { loading: false, image: payload.image, errors: {} }
      };
    case userActionsTypes.UPLOAD_PROFILE_PICTURE_FAILURE:
      return {
        ...state,
        uploadImage: {
          loading: false,
          image: {},
          errors: { ...payload.errors, message: payload.message }
        }
      };
    default:
      return null;
  }
};

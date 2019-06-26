import userReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../../actions-types';

describe('User reducers', () => {
  test('UPLOAD_PROFILE_PICTURE_START', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.UPLOAD_PROFILE_PICTURE_START,
      payload: { loading: true }
    });

    expect(reducer.uploadImage).toHaveProperty('loading');
    expect(reducer.uploadImage.loading).toBeTruthy();
  });

  test('UPLOAD_PROFILE_PICTURE_SUCCESS', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.UPLOAD_PROFILE_PICTURE_SUCCESS,
      payload: {
        image: {
          original: 'image.jpg',
          square: 'image.jpg',
          circle: 'image.jpg'
        }
      }
    });

    expect(reducer.uploadImage).toHaveProperty('image');
    expect(reducer.uploadImage.image).toHaveProperty('original');
    expect(reducer.uploadImage.image).toHaveProperty('square');
    expect(reducer.uploadImage.image).toHaveProperty('circle');
  });

  test('UPLOAD_PROFILE_PICTURE_FAILURE', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.UPLOAD_PROFILE_PICTURE_FAILURE,
      payload: { message: 'file is too large' }
    });

    expect(reducer.uploadImage).toHaveProperty('errors');
    expect(reducer.uploadImage.errors.message).toEqual('file is too large');
  });

  test('UPLOAD_PROFILE_PICTURE_END', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.UPLOAD_PROFILE_PICTURE_END,
      payload: { loading: false }
    });

    expect(reducer.uploadImage).toHaveProperty('loading');
    expect(reducer.uploadImage.loading).toBeFalsy();
  });
});

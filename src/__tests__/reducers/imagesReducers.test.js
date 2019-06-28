import imagesReducer from '../../reducers/imagesReducer';
import initialState from '../../store/initialStates/imagesInitialState';
import { imagesTypes } from '../../actions-types';

describe('User reducers', () => {
  test('UPLOAD_IMAGE_START', () => {
    const reducer = imagesReducer(initialState, {
      type: imagesTypes.UPLOAD_IMAGE_START,
      payload: { loading: true }
    });

    expect(reducer.uploadImage).toHaveProperty('loading');
    expect(reducer.uploadImage.loading).toBeTruthy();
  });

  test('UPLOAD_IMAGE_SUCCESS', () => {
    const reducer = imagesReducer(initialState, {
      type: imagesTypes.UPLOAD_IMAGE_SUCCESS,
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

  test('UPLOAD_IMAGE_FAILURE', () => {
    const reducer = imagesReducer(initialState, {
      type: imagesTypes.UPLOAD_IMAGE_FAILURE,
      payload: { message: 'file is too large' }
    });

    expect(reducer.uploadImage).toHaveProperty('errors');
    expect(reducer.uploadImage.errors.message).toEqual('file is too large');
  });

  test('UPLOAD_IMAGE_END', () => {
    const reducer = imagesReducer(initialState, {
      type: imagesTypes.UPLOAD_IMAGE_END,
      payload: { loading: false }
    });

    expect(reducer.uploadImage).toHaveProperty('loading');
    expect(reducer.uploadImage.loading).toBeFalsy();
  });
});

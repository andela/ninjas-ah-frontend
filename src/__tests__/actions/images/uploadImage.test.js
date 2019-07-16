import { uploadImage } from '../../../actions/images/images';
import article from '../../../__mocks__/article';

const dispatch = jest.fn(action => action);

describe('upload image', () => {
  test('returns upload information', async () => {
    const result = uploadImage({ image: 'image.png' })(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});

import { createPost } from '../../../actions/articles';
import article from '../../../__mocks__/article';

const dispatch = jest.fn(action => action);

describe('Create article', () => {
  test('returns article information', async () => {
    const result = createPost(article)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.data).toEqual(article);
  });
});

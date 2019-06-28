import { editPost } from '../../../actions/articles';
import article from '../../../__mocks__/article';

const dispatch = jest.fn(action => action);

describe('edit article', () => {
  it('returns article information', async () => {
    const result = editPost({ article })(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.data).toEqual(article);
  });
});

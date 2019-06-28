import { deleteArticle } from '../../../actions/articles';
import article from '../../../__mocks__/article';

const dispatch = jest.fn(action => action);

describe('delete article', () => {
  it('returns delete article information', async () => {
    const result = deleteArticle({ slug: 'slug-slug' })(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});

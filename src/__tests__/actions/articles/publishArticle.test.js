import { publishArticle } from '../../../actions/articles';
import article from '../../../__mocks__/article';

const dispatch = jest.fn(action => action);

describe('publish article', () => {
  it('returns publish information', async () => {
    const result = publishArticle({ slug: 'slug-slug' })(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});

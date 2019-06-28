import { unpublishArticle } from '../../../actions/articles';

const dispatch = jest.fn(action => action);

describe('unpublish article', () => {
  it('returns unpublish information', async () => {
    const result = unpublishArticle({ slug: 'slug-slug' })(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});

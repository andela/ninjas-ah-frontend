import { deleteArticle, clearDeleteArticleStore } from '../../../actions/articles';

const dispatch = jest.fn(action => action);

describe('delete article', () => {
  it('returns delete article information', async () => {
    clearDeleteArticleStore()(dispatch);
    const result = deleteArticle({ slug: 'slug-slug' })(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});

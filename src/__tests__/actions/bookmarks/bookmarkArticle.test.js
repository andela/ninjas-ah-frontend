import { bookmarkArticle } from '../../../actions/bookmarks/bookmarkArticle';
import { article } from '../../../__mocks__/article';

const dispatch = jest.fn(action => action);

test('should bookmark  article', () => {
  const result = bookmarkArticle(article)(dispatch);
  expect(result).toHaveProperty('type');
  expect(result).toHaveProperty('payload');
});

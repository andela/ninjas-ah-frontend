import { highlightArticle, clearHighlightArticleStore } from '../../../actions/articles';
import { newHighlight } from '../../../__mocks__/article';

const dispatch = jest.fn(action => action);

test('should highlight text in article', () => {
  clearHighlightArticleStore()(dispatch);
  const result = highlightArticle(newHighlight)(dispatch);
  expect(result).toHaveProperty('type');
  expect(result).toHaveProperty('payload');
});

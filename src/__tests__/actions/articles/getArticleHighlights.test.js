import { getArticleHighlights, clearGetArticleHighlightsStore } from '../../../actions/articles';

const dispatch = jest.fn(action => action);

test('should get all highlights', () => {
  clearGetArticleHighlightsStore()(dispatch);
  const result = getArticleHighlights('slug')(dispatch);
  expect(result).toHaveProperty('type');
  expect(result).toHaveProperty('payload');
});

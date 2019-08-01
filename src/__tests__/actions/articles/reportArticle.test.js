import { reportArticle, clearReportArticleStore } from '../../../actions/articles';
import { newArticleReport } from '../../../__mocks__/article';

const dispatch = jest.fn(action => action);

test('should report an article', () => {
  clearReportArticleStore()(dispatch);
  const result = reportArticle(newArticleReport)(dispatch);
  expect(result).toHaveProperty('type');
  expect(result).toHaveProperty('payload');
});

test('should report an article', () => {
  clearReportArticleStore()(dispatch);
  const result = reportArticle()(dispatch);
  expect(result).toHaveProperty('type');
  expect(result).toHaveProperty('payload');
});

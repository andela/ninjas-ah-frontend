import { getArticlesReports, clearGetArticlesReportsStore } from '../../../actions/articles';

const dispatch = jest.fn(action => action);

test('should get all reports', () => {
  clearGetArticlesReportsStore()(dispatch);
  const result = getArticlesReports()(dispatch);
  expect(result).toHaveProperty('type');
  expect(result).toHaveProperty('payload');
});

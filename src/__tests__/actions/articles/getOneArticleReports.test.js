import { getOneArticleReports, clearGetOneArticleReportsStore } from '../../../actions/articles';

const dispatch = jest.fn(action => action);

test('should get all reports of one articles', () => {
  clearGetOneArticleReportsStore()(dispatch);
  const result = getOneArticleReports('slug')(dispatch);
  expect(result).toHaveProperty('type');
  expect(result).toHaveProperty('payload');
});

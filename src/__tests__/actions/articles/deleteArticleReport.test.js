import { deleteArticleReport, clearDeleteArticleReportStore } from '../../../actions/articles';

const dispatch = jest.fn(action => action);
const reportToDelete = {
  slug: 'slug',
  reportId: 1
};

test('should delete a report', () => {
  clearDeleteArticleReportStore()(dispatch);
  const result = deleteArticleReport(reportToDelete)(dispatch);
  expect(result).toHaveProperty('type');
  expect(result).toHaveProperty('payload');
});

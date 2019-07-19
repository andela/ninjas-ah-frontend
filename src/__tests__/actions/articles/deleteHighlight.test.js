import {
  deleteArticleHighlight,
  clearDeleteArticleHighlightStore
} from '../../../actions/articles';

const dispatch = jest.fn(action => action);
const highlightToDelete = {
  slug: 'slug',
  highlightId: 1
};

test('should delete a highlight', () => {
  clearDeleteArticleHighlightStore()(dispatch);
  const result = deleteArticleHighlight(highlightToDelete)(dispatch);
  expect(result).toHaveProperty('type');
  expect(result).toHaveProperty('payload');
});

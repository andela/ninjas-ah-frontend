import { getCommentHistory } from '../../../actions';
import { Comment } from '../../../__mocks__/article';

const dispatch = jest.fn(action => action);

describe('Edit comment history', () => {
  test('returns comments information', async () => {
    const result = getCommentHistory(Comment)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});

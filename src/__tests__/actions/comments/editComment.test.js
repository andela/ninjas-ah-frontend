import { editComment } from '../../../actions/index';
import { Comment } from '../../../__mocks__/article';

const dispatch = jest.fn(action => action);

describe('Edit comment', () => {
  test('returns comments information', async () => {
    const result = editComment(Comment)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});

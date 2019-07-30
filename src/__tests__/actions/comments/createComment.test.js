import { createComment } from '../../../actions/index';
import { Comment } from '../../../__mocks__/article';

const dispatch = jest.fn(action => action);

describe('Create comment', () => {
  test('returns comments information', async () => {
    const result = createComment(Comment)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});

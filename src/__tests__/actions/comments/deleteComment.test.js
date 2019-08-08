import { deleteComment } from '../../../actions/index';
import { newComment } from '../../../__mocks__/article';

const dispatch = jest.fn(action => action);

describe('delete comment', () => {
  it('returns delete comment information', async () => {
    const result = deleteComment(newComment)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});

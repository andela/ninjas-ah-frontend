import { fetchComments } from '../../../actions/index';
import { newComment } from '../../../__mocks__/article';

const dispatch = jest.fn(action => action);

describe('Fetch comments', () => {
  test('returns fetch comments information', async () => {
    const result = fetchComments(newComment)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});

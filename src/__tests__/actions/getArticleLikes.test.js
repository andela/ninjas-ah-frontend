import { getArticleLikes } from '../../actions';
import article from '../../__mocks__/articles';

const dispatch = jest.fn(action => action);

describe('Signup user', () => {
  test('returns user information', async () => {
    const result = getArticleLikes(article)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});

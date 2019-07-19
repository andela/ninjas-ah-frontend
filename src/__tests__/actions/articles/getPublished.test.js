import { getPublished } from '../../../actions/articles';
import article from '../../../__mocks__/article';

const dispatch = jest.fn(action => action);

describe('published article articles', () => {
  it('returns publish information', async () => {
    const result = getPublished()(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});

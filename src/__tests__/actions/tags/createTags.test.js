import { createTag } from '../../../actions/index';
import { Tags } from '../../../__mocks__/article';

const dispatch = jest.fn(action => action);

describe('Create Tags', () => {
  test('returns tags information', async () => {
    const result = createTag(Tags)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
  });
});

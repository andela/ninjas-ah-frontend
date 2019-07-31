import { unfollow } from '../../../actions/followUnfollow/unfollow';

const dispatch = jest.fn(action => action);
const username = 'prince';
test('should bookmark  article', () => {
  const result = unfollow(username)(dispatch);
  expect(result).toHaveProperty('type');
  expect(result).toHaveProperty('payload');
});

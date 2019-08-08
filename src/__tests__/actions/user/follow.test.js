import follow from '../../../actions/followUnfollow/follow';

const dispatch = jest.fn(action => action);
const username = 'prince';
test('should bookmark  article', () => {
  const result = follow(username)(dispatch);
  expect(result).toHaveProperty('type');
  expect(result).toHaveProperty('payload');
});

import initialState from '../../store/initialState';

test('Notification initial state', () => {
  expect(initialState).toHaveProperty('notification');
});

test('User initial state', () => {
  expect(initialState).toHaveProperty('user');
});

import userInitialState from '../../store/initialStates/userInitialState';

test('User initial state', () => {
  expect(userInitialState).toHaveProperty('isAuth');
});

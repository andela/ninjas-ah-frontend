import store from '../../store';

test('store', () => {
  expect(store).toHaveProperty('dispatch');
  expect(store).toHaveProperty('subscribe');
  expect(store).toHaveProperty('getState');
  expect(store).toHaveProperty('replaceReducer');
});

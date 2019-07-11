import { tagGenerator } from '../../../helpers/html';

test('generates html tags', () => {
  expect(tagGenerator('br', null)).toHaveLength(1);
  expect(tagGenerator('br', null, 5)).toHaveLength(5);
  expect(tagGenerator('div', 'hello', 5)).toHaveLength(5);
});

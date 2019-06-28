/* eslint-disable no-unused-expressions */
import TimeStamp from '../../helpers/TimeStamp';

test('TimeStamp', () => {
  expect(TimeStamp('2019-07-06 00:43:57.384+02')).toBeCalled;
});

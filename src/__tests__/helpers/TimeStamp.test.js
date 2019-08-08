/* eslint-disable no-unused-expressions */
import timeStamp from '../../helpers/timeStamp';

test('TimeStamp', () => {
  expect(timeStamp('2019-07-06 00:43:57.384+02')).toBeCalled;
});

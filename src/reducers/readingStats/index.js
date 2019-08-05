import { readingStats as initialState } from '../../store/initialState';
import addReadingStats from './addReadingStats';
import getReadingStats from './getReadingStats';

export default (state = initialState, action) => {
  const addStats = addReadingStats(state, action);
  const getStats = getReadingStats(state, action);
  return addStats || getStats || state;
};

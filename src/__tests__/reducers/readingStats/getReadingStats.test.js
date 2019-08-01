import getReadingStats from '../../../reducers/readingStats/getReadingStats';
import initialState from '../../../store/initialStates/readingStatsInitialState';
import { readingStatsActionTypes } from '../../../actions-types';

describe('Reading Stats', () => {
  test('GET READING START', () => {
    getReadingStats(initialState, {
      type: readingStatsActionTypes.GET_READING_STATS_START,
      payload: {}
    });
  });

  test('GET READING SUCCESS', () => {
    getReadingStats(initialState, {
      type: readingStatsActionTypes.GET_READING_STATS_SUCESS,
      payload: { readingStats: { message: 'successfully saved' } }
    });
  });

  test('GET READING FAILURE', () => {
    getReadingStats(initialState, {
      type: readingStatsActionTypes.GET_READING_STATS_FAILURE,
      payload: { getReadingStats: { errors: '-----' } }
    });
  });

  test('GET READING END', () => {
    getReadingStats(initialState, {
      type: readingStatsActionTypes.GET_READING_STATS_END,
      payload: { loading: false }
    });
  });
});

import addReadingStats from '../../../reducers/readingStats/addReadingStats';
import initialState from '../../../store/initialStates/readingStatsInitialState';
import { readingStatsActionTypes } from '../../../actions-types';

describe('Reading Stats', () => {
  test('CREATE READING START', () => {
    addReadingStats(initialState, {
      type: readingStatsActionTypes.SAVE_READING_STATS_START,
      payload: {}
    });
  });

  test('CREATE READING SUCCESS', () => {
    addReadingStats(initialState, {
      type: readingStatsActionTypes.SAVE_READING_STATS_SUCESS,
      payload: { saveReadingStats: { message: 'successfully saved' } }
    });
  });

  test('CREATE READING FAILURE', () => {
    addReadingStats(initialState, {
      type: readingStatsActionTypes.SAVE_READING_STATS_FAILURE,
      payload: { saveReadingStats: { errors: '-----' } }
    });
  });

  test('CREATE READING END', () => {
    addReadingStats(initialState, {
      type: readingStatsActionTypes.SAVE_READING_STATS_END,
      payload: { loading: false }
    });
  });
});

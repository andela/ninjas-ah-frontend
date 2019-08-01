import { readingStatsActionTypes } from '../../actions-types';

export default function (state, { type, payload }) {
  switch (type) {
    case readingStatsActionTypes.SAVE_READING_STATS_START:
      return {
        ...state,
        saveReadingStats: { ...state.saveReadingStats, message: '', loading: true, errors: {} }
      };
    case readingStatsActionTypes.SAVE_READING_STATS_END:
      return {
        ...state,
        saveReadingStats: { ...state.saveReadingStats, message: '', loading: false, errors: {} }
      };
    case readingStatsActionTypes.SAVE_READING_STATS_SUCESS:
      return {
        ...state,
        saveReadingStats: { loading: false, message: payload.message, errors: {} }
      };
    case readingStatsActionTypes.SAVE_READING_STATS_FAILURE:
      return {
        ...state,
        saveReadingStats: { loading: false, message: '', errors: payload.errors }
      };
    default:
      return null;
  }
}

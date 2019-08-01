import { readingStatsActionTypes } from '../../actions-types';

export default function (state, { type, payload }) {
  switch (type) {
    case readingStatsActionTypes.GET_READING_STATS_START:
      return {
        ...state,
        getReadingStats: { ...state.getReadingStats, message: '', loading: true, errors: {} }
      };
    case readingStatsActionTypes.GET_READING_STATS_END:
      return {
        ...state,
        getReadingStats: { ...state.getReadingStats, message: '', loading: false, errors: {} }
      };
    case readingStatsActionTypes.GET_READING_STATS_SUCESS:
      return {
        ...state,
        readingStats: { loading: false, readingStats: payload.readingStats, errors: {} }
      };
    case readingStatsActionTypes.GET_READING_STATS_FAILURE:
      return {
        ...state,
        getReadingStats: { loading: false, message: '', errors: payload.errors }
      };
    default:
      return null;
  }
}

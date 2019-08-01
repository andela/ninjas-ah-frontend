import { readingStatsActionTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default () => dispatch => dispatch(apiAction({
  method: 'get',
  url: 'user/profile/stats',
  onStart: readingStatsActionTypes.GET_READING_STATS_START,
  onEnd: readingStatsActionTypes.GET_READING_STATS_END,
  onSuccess: readingStatsActionTypes.GET_READING_STATS_SUCESS,
  onFailure: readingStatsActionTypes.GET_READING_STATS_FAILURE
}));

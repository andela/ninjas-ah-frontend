import { readingStatsActionTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default slug => dispatch => dispatch(apiAction({
  method: 'post',
  url: `user/profile/${slug}/stats`,
  onStart: readingStatsActionTypes.SAVE_READING_STATS_START,
  onEnd: readingStatsActionTypes.SAVE_READING_STATS_END,
  onSuccess: readingStatsActionTypes.SAVE_READING_STATS_SUCCESS,
  onFailure: readingStatsActionTypes.SAVE_READING_STATS_FAILURE
}));

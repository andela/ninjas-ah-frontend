import { user as initialState } from '../../store/initialState';
import createRatingReducer from './createRatingReducer';

export default (state = initialState, action) => {
  const createRating = createRatingReducer(state, action);
  return createRating || state;
};

import createRatingReducer from '../../../reducers/rating/createRatingReducer';
import initialState from '../../../store/initialStates/ratingInitialState';
import { ratingActionsTypes } from '../../../actions-types';

const rating = {
  slug: 'slug-slug',
  rating: 1
};

describe('Rating reducers', () => {
  it('CREATE_RATING_START', () => {
    const reducer = createRatingReducer(initialState, {
      type: ratingActionsTypes.CREATE_RATING_START,
      payload: {}
    });
    expect(reducer.createRate).toBeInstanceOf(Object);
  });
  it('CREATE_RATING_SUCCESS', () => {
    const reducer = createRatingReducer(initialState, {
      type: ratingActionsTypes.CREATE_RATING_SUCCESS,
      payload: { rating }
    });
    expect(reducer.createRate).toHaveProperty('errors');
  });
  it('CREATE_RATING_FAILURE', () => {
    const reducer = createRatingReducer(initialState, {
      type: ratingActionsTypes.CREATE_RATING_FAILURE,
      payload: {}
    });
    expect(reducer.createRate).toHaveProperty('errors');
  });
  it('DEFAULT', () => {
    createRatingReducer(initialState, {
      type: null,
      payload: null
    });
  });
});

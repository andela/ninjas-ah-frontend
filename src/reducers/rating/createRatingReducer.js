import { ratingActionsTypes } from '../../actions-types';
import { rating as initialState } from '../../store/initialState';

export default function (state, { type, payload }) {
  switch (type) {
    case ratingActionsTypes.CLEAR_CREATE_RATING_STORE:
      return {
        ...state,
        createRate: { ...payload, loading: false, message: '', errors: {} }
      };
    case ratingActionsTypes.CREATE_RATING_START:
      return {
        ...state,
        createRate: { loading: true, message: payload.message, errors: {} }
      };
    case ratingActionsTypes.CREATE_RATING_SUCCESS:
      return {
        ...state,
        createRate: { loading: false, message: payload.rating.message, errors: {} }
      };
    case ratingActionsTypes.CREATE_RATING_FAILURE:
      return {
        ...state,
        createRate: { loading: false, message: '', errors: payload.errors }
      };
    default:
      return null;
  }
}

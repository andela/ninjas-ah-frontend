import { notificationReducer as initialState } from '../store/initialState';
import * as types from '../action-types';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.notificationActionTypes.CREATE_ONE:
      return {
        ...state,
        payload
      };

    case types.notificationActionTypes.CATCH_ERROR:
      return {
        ...state,
        errorMessage: payload.config || payload.authentication || payload.token
      };

    case types.notificationActionTypes.TOGGLE_NOTIFICATION_TYPE:
      return {
        ...state,
        config: {
          ...state.config,
          [payload]: {
            ...state.config[payload],
            articles: {
              ...state.config[payload].articles,
              show: !state.config[payload].articles.show
            }
          }
        }
      };

    case types.notificationActionTypes.ADD_OPTION:
      return {
        ...state,
        config: {
          ...state.config,
          [payload.type]: {
            ...state.config[payload.type],
            articles: {
              ...state.config[payload.type].articles,
              on: [...state.config[payload.type].articles.on, payload.option]
            }
          }
        }
      };

    case types.notificationActionTypes.REMOVE_OPTION:
      return {
        ...state,
        config: {
          ...state.config,
          [payload.type]: {
            ...state.config[payload.type],
            articles: {
              ...state.config[payload.type].articles,
              on: [...state.config[payload.type].articles.on].filter(
                option => payload.option !== option
              )
            }
          }
        }
      };
    default:
      return state;
  }
};

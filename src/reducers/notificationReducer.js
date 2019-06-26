/* eslint-disable no-return-assign */
import { notification as initialState } from '../store/initialState';
import * as types from '../actions-types';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.notificationActionTypes.CREATE_NOTIFICATION_CONFIGURATION_SUCCESS:
      return {
        ...state,
        config: payload,
        createNotificationConfiguration: {}
      };

    case types.notificationActionTypes.TOGGLE_NOTIFICATION_CONFIGURATION_TYPE:
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
              on: [...state.config[payload.type].articles.on].filter(opt => payload.option !== opt)
            }
          }
        }
      };
    case types.notificationActionTypes.GET_NOTIFICATION_CONFIGURATION_SUCCESS:
      return {
        ...state,
        config: {
          inApp: {
            alias: 'Authors Haven',
            articles: {
              show: payload.config === null ? false : payload.config.inApp.articles.show,
              on: payload.config === null ? [] : payload.config.inApp.articles.on
            }
          },
          email: {
            alias: 'Email',
            articles: {
              show: payload.config === null ? false : payload.config.email.articles.show,
              on: payload.config === null ? [] : payload.config.email.articles.on
            }
          }
        }
      };

    case types.notificationActionTypes.UPDATE_NOTIFICATION_CONFIGURATION_SUCCESS:
      return {
        ...state,
        notification: payload,
        updateNotificationConfiguration: {
          loading: false,
          message: payload.message,
          errors: {}
        }
      };

    default:
      return state;
  }
};

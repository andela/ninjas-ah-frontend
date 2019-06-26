import { notificationActionTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case notificationActionTypes.TOGGLE_NOTIFICATION_CONFIGURATION_TYPE:
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

    case notificationActionTypes.ADD_OPTION:
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

    case notificationActionTypes.REMOVE_OPTION:
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
    default:
      return null;
  }
};

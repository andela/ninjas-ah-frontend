import * as types from '../actions-types';
import { apiAction } from '../helpers/index';

export const createNotificationConfiguration = config => async dispatch => dispatch(apiAction({
  method: 'post',
  url: '/notifications/configuration',
  data: { config },
  onStart: types.notificationActionTypes.CREATE_NOTIFICATION_CONFIGURATION_START,
  onSuccess: types.notificationActionTypes.CREATE_NOTIFICATION_CONFIGURATION_SUCCESS,
  onFailure: types.notificationActionTypes.CREATE_NOTIFICATION_CONFIGURATION_FAILURE,
  onEnd: types.notificationActionTypes.CREATE_NOTIFICATION_CONFIGURATION_END
}));

export const getNotificationConfiguration = () => async dispatch => dispatch(apiAction({
  method: 'get',
  url: '/notifications/configuration',
  onStart: types.notificationActionTypes.GET_NOTIFICATION_CONFIGURATION_START,
  onSuccess: types.notificationActionTypes.GET_NOTIFICATION_CONFIGURATION_SUCCESS,
  onFailure: types.notificationActionTypes.GET_NOTIFICATION_CONFIGURATION_FAILURE,
  onEnd: types.notificationActionTypes.GET_NOTIFICATION_CONFIGURATION_END
}));
export const updateNotificationConfiguration = config => async dispatch => dispatch(apiAction({
  method: 'put',
  url: '/notifications/configuration',
  data: { config },
  onStart: types.notificationActionTypes.UPDATE_NOTIFICATION_CONFIGURATION_START,
  onSuccess: types.notificationActionTypes.UPDATE_NOTIFICATION_CONFIGURATION_SUCCESS,
  onFailure: types.notificationActionTypes.UPDATE_NOTIFICATION_CONFIGURATION_FAILURE,
  onEnd: types.notificationActionTypes.UPDATE_NOTIFICATION_CONFIGURATION_END
}));

export const addOption = (option, type) => ({
  type: types.notificationActionTypes.ADD_OPTION,
  payload: { option, type }
});

export const removeOption = (option, type) => ({
  type: types.notificationActionTypes.REMOVE_OPTION,
  payload: { option, type }
});

export const toggleNotificationType = type => ({
  type: types.notificationActionTypes.TOGGLE_NOTIFICATION_CONFIGURATION_TYPE,
  payload: type
});
export const getNotification = () => async dispatch => dispatch(apiAction({
  method: 'get',
  url: '/notifications',
  onStart: types.notificationActionTypes.GET_NOTIFICATION_START,
  onSuccess: types.notificationActionTypes.GET_NOTIFICATION_SUCCESS,
  onFailure: types.notificationActionTypes.GET_NOTIFICATION_FAILURE,
  onEnd: types.notificationActionTypes.GET_NOTIFICATION_END
}));
export const getUnseenNotification = () => async dispatch => dispatch(apiAction({
  method: 'get',
  url: '/notifications/unseen',
  onStart: types.notificationActionTypes.GET_UNSEEN_NOTIFICATION_START,
  onSuccess: types.notificationActionTypes.GET_UNSEEN_NOTIFICATION_SUCCESS,
  onFailure: types.notificationActionTypes.GET_UNSEEN_NOTIFICATION_FAILURE,
  onEnd: types.notificationActionTypes.GET_UNSEEN_NOTIFICATION_END
}));
export const updateUnseenNotification = unseeNotification => async dispatch => dispatch(apiAction({
  method: 'put',
  url: `/notifications/${unseeNotification.id}/seen`,
  date: { unseeNotification },
  onStart: types.notificationActionTypes.UPDATE_UNSEEN_NOTIFICATION_START,
  onSuccess: types.notificationActionTypes.UPDATE_UNSEEN_NOTIFICATION_SUCCESS,
  onFailure: types.notificationActionTypes.UPDATE_UNSEEN_NOTIFICATION_FAILURE,
  onEnd: types.notificationActionTypes.UPDATE_UNSEEN_NOTIFICATION_END
}));

export const deleteNotification = deleteNotification => async dispatch => dispatch(apiAction({
  method: 'delete',
  url: `/notifications/${deleteNotification.id}`,
  date: { deleteNotification },
  onStart: types.notificationActionTypes.DELETE_NOTIFICATION_START,
  onSuccess: types.notificationActionTypes.DELETE_NOTIFICATION_SUCCESS,
  onFailure: types.notificationActionTypes.DELETE_NOTIFICATION_FAILURE,
  onEnd: types.notificationActionTypes.DELETE_NOTIFICATION_END
}));

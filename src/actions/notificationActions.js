import * as types from '../action-types';
import { axiosHelper } from '../helpers/index';

export const createOne = config => async (dispatch) => {
  try {
    const res = await axiosHelper().post('/notifications/configuration', { config });
    const { data } = res;
    dispatch({
      type: types.notificationActionTypes.CREATE_ONE,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.notificationActionTypes.CATCH_ERROR,
      payload: error.response.data.errors
    });
  }
};

export const addOption = (option, type) => ({
  type: types.notificationActionTypes.ADD_OPTION,
  payload: { option, type }
});

export const removeOption = (option, type) => ({
  type: types.notificationActionTypes.REMOVE_OPTION,
  payload: { option, type }
});

export const toggleNotificationType = type => ({
  type: types.notificationActionTypes.TOGGLE_NOTIFICATION_TYPE,
  payload: type
});

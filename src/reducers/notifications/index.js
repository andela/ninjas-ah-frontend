import { notification as initialState } from '../../store/initialState';
import resetConfigurationOptions from './resetConfigurationOptions';
import createConfiguration from './createConfiguration';
import getConfiguration from './getConfiguration';
import updateConfiguration from './updateConfiguration';
import deleteNotification from './deleteNotification';
import getNotifications from './getNotifications';
import updateUnseeNotification from './updateUnseenNotifications';
import getUnseenNotifications from './getUnseenNotifications';
import marAllAsSeen from './markAllAsSeen';

export default (state = initialState, action) => {
  const resetConfigOptions = resetConfigurationOptions(state, action);
  const createConfig = createConfiguration(state, action);
  const getConfig = getConfiguration(state, action);
  const updateConfig = updateConfiguration(state, action);
  const updateUnseenNotif = updateUnseeNotification(state, action);
  const getNotif = getNotifications(state, action);
  const getUnseesNotif = getUnseenNotifications(state, action);
  const markAsSeen = marAllAsSeen(state, action);
  const deleteNotif = deleteNotification(state, action);

  return (
    resetConfigOptions
    || createConfig
    || getConfig
    || updateConfig
    || getNotif
    || getUnseesNotif
    || deleteNotif
    || updateUnseenNotif
    || markAsSeen
    || state
  );
};

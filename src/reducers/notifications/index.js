import { notification as initialState } from '../../store/initialState';
import resetConfigurationOptions from './resetConfigurationOptions';
import createConfiguration from './createConfiguration';
import getConfiguration from './getConfiguration';
import updateConfiguration from './updateConfiguration';

export default (state = initialState, action) => {
  const resetConfigOptions = resetConfigurationOptions(state, action);
  const createConfig = createConfiguration(state, action);
  const getConfig = getConfiguration(state, action);
  const updateConfig = updateConfiguration(state, action);
  return resetConfigOptions || createConfig || getConfig || updateConfig || state;
};

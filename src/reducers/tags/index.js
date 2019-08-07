import { tags as initialState } from '../../store/initialState';
import addTagReducer from './addTagReducer';

export default (state = initialState, action) => {
  const addTags = addTagReducer(state, action);
  return addTags || state;
};

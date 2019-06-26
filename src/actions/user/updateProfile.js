import { userActionsTypes } from '../../actions-types';

export default data => dispatch => dispatch({
  type: userActionsTypes.EDIT_PROFILE_SUCCESS,
  payload: data
});

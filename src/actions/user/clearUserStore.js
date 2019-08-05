import { userActionsTypes } from '../../actions-types';

export default payload => dispatch => dispatch({
  type: userActionsTypes.CLEAR_USER_STORE,
  payload
});

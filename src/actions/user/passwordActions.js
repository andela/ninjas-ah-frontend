import { toast } from 'react-toastify';
import { axiosHelper } from '../../helpers';
import { passwordAction } from '../../actions-types';

export const forgotPassword = email => async (dispatch) => {
  try {
    dispatch(passwordAction.forgotPasswordInitialized());
    const { data } = await axiosHelper().post('/auth/reset', { email });
    if (data.message) {
      dispatch(passwordAction.forgotPasswordSuccess());
      toast.success(data.message);
    }
    return data;
  } catch (error) {
    dispatch(passwordAction.forgotPasswordError());
    toast.error('Request failed, something went wrong...');
    return (error.response && error.response.data) || error;
  }
};

export const resetPassword = (payload = {}) => async (dispatch) => {
  const { password, confirmPassword, token } = payload;
  try {
    dispatch(passwordAction.resetPasswordInitialized());
    const { data } = await axiosHelper().patch(`auth/reset/${token}`, {
      passwordOne: password,
      passwordTwo: confirmPassword
    });
    if (data.message) {
      dispatch(passwordAction.resetPasswordSuccess());
      toast.success(data.message);
    }
    return data;
  } catch (error) {
    dispatch(passwordAction.resetPasswordError());
    toast.error(error.response.data.message);
    return (error.response && error.response.data) || error;
  }
};

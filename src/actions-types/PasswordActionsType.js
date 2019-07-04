export const FORGOT_PASSWORD_INITIALIZED = 'FORGOT_PASSWORD_INITIALIZED';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';
export const RESET_PASSWORD_INITIALIZED = 'RESET_PASSWORD_INITIALIZED';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

export const forgotPasswordInitialized = () => ({ type: FORGOT_PASSWORD_INITIALIZED });

export const forgotPasswordSuccess = () => ({ type: FORGOT_PASSWORD_SUCCESS });

export const forgotPasswordError = () => ({ type: FORGOT_PASSWORD_ERROR });

export const resetPasswordInitialized = () => ({ type: RESET_PASSWORD_INITIALIZED });

export const resetPasswordSuccess = () => ({ type: RESET_PASSWORD_SUCCESS });

export const resetPasswordError = () => ({ type: RESET_PASSWORD_ERROR });

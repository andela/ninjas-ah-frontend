import Joi from 'joi-browser';
import newUser from './schemas/newUser';
import updateUser from './schemas/updateUser';

export default (inputs, schema) => {
  const errors = {};
  const validateSchemas = {
    newUser,
    updateUser
  };
  const { error } = Joi.validate(inputs, validateSchemas[schema], { abortEarly: false });

  if (error && typeof error === 'object' && Object.keys(error).length) {
    error.details.forEach((err) => {
      errors[err.path[0]] = err.message.replace(/"/g, '');
    });
  }

  if (inputs.confirmPassword && inputs.password !== inputs.confirmPassword) {
    errors.confirmPassword = 'Password doesn\'t match';
  }

  return errors;
};

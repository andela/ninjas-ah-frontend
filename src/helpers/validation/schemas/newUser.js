import Joi from 'joi-browser';

export default Joi.object().keys({
  firstName: Joi.string()
    .min(2)
    .max(45)
    .required()
    .label('First name'),
  lastName: Joi.string()
    .min(2)
    .max(45)
    .required()
    .label('Last name'),
  username: Joi.string()
    .min(4)
    .max(45)
    .required(),
  email: Joi.string()
    .min(5)
    .max(100)
    .required(),
  password: Joi.string()
    .min(8)
    .max(100)
    .required(),
  confirmPassword: Joi.string()
    .min(8)
    .max(100)
    .required(),
  role: Joi.string()
    .min(2)
    .max(100)
    .optional(),
  permissions: Joi.string()
    .min(2)
    .max(255)
    .optional()
});

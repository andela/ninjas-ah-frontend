import Joi from 'joi-browser';

export default Joi.object().keys({
  firstName: Joi.string()
    .min(2)
    .max(45)
    .optional()
    .label('First name'),
  lastName: Joi.string()
    .min(2)
    .max(45)
    .optional()
    .label('Last name'),
  username: Joi.string()
    .min(4)
    .max(45)
    .optional(),
  email: Joi.string()
    .min(5)
    .max(100)
    .optional(),
  bio: Joi.string()
    .min(5)
    .optional(),
  image: Joi.string()
    .min(5)
    .max(100)
    .optional(),
  password: Joi.string()
    .min(8)
    .max(100)
    .optional(),
  confirmPassword: Joi.string()
    .min(8)
    .max(100)
    .optional(),
  role: Joi.string()
    .min(2)
    .max(100)
    .optional(),
  permissions: Joi.object().optional()
});

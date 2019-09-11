const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
  createUserSchema: Joi.object().keys({
      mail: Joi.string().email().required(),
      nom: Joi.string().alphanum().min(3).max(30).required(),
      password: Joi.string().required(),
      direccio: Joi.string().required(),
      num_compte: Joi.number().integer().min(100000000).max(999999999).required(),
      tipus: Joi.string().valid("admin", "normal").required()
  }),
  getUserDetailsSchema: Joi.object().keys({
    userId: Joi.objectId().required()
  }),
  getUserListSchema: Joi.object().keys({
      skip: Joi.number().optional(),
      limit: Joi.number().optional()
  }).and('skip', 'limit'),
  userIdPathParamSchema: Joi.object().keys({
      userId: Joi.objectId().required()
  }),

  updateUserBodySchema: Joi.object().keys({
    mail: Joi.string().email().optional(),
    nom: Joi.string().alphanum().min(3).max(30).optional(),
    password: Joi.string().optional(),
    direccio: Joi.string().optional(),
    num_compte: Joi.number().integer().min(100000000).max(999999999).optional(),
    tipus: Joi.string().valid("admin", "normal").optional()
  }),
  
  authenticateUserSchema: Joi.object().keys({
      mail: Joi.string().email().required(),
      password: Joi.string().required()
  }),

  tokenHeaderSchema: Joi.object().keys({
      authorization: Joi.string().required()
  })
}

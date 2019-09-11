const mediaSchema = require('../../models/api/mediaSchema');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
  createCapitolSchema: Joi.object().keys({
      titol: Joi.string().required(),
      numero: Joi.number().integer().min(0).max(999).required(),
      temporada: Joi.number().integer().min(0).max(999).required(),

      serieId: Joi.objectId().required()
      // serieId: mediaSchema.getMediaDetailsSchema.mediaId
  }),
  getCapitolDetailsSchema: Joi.object().keys({
    capitolId: Joi.objectId().required()
  }),
  getCapitolListSchema: Joi.object().keys({
      skip: Joi.number().optional(),
      limit: Joi.number().optional()
  }).and('skip', 'limit'),
  capitolIdPathParamSchema: Joi.object().keys({
      capitolId: Joi.objectId().required()
  }),
  updateCapitolBodySchema: Joi.object().keys({
    titol: Joi.string().optional(),
    numero: Joi.number().integer().min(0).max(999).optional(),
    temporada: Joi.number().integer().min(0).max(999).optional(),
    serieId: Joi.string().optional()
  })
}

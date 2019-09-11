const express = require('express');
const router = express.Router();
const mediaController = require('../controller/mediaController');
const joiSchemaValidation = require('../helper/joiSchemaValidation');
const mediaSchema = require('../models/api/mediaSchema');
const constants = require('../config/constants');
const userSchema = require('../models/api/userSchema');
const tokenValidation = require('../models/api/tokenValidation');


router.post('/',
    joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    tokenValidation.validateToken(),
    tokenValidation.checkAdmin(),
    joiSchemaValidation.validate(mediaSchema.createMediaSchema, constants.requestObj.BODY),
    mediaController.createMedia
);
router.get('/details/:mediaId',
    joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    tokenValidation.validateToken(),
    tokenValidation.checkAdmin(),
    joiSchemaValidation.validate(mediaSchema.getMediaDetailsSchema, constants.requestObj.PATH_PARAMS),
    mediaController.getMediaDetails
);
router.get('/list',
    joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    tokenValidation.validateToken(),
    tokenValidation.checkAdmin(),
    joiSchemaValidation.validate(mediaSchema.getMediaListSchema, constants.requestObj.QUERY_PARAMS),
    mediaController.getMediaList
);
router.get('/list/media',
    joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    tokenValidation.validateToken(),
    tokenValidation.checkAdmin(),
    joiSchemaValidation.validate(mediaSchema.getMediaListPeliculasSchema, constants.requestObj.QUERY_PARAMS),
    mediaController.getMediaListTipus
);
router.put('/:mediaId',
    joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    tokenValidation.validateToken(),
    tokenValidation.checkAdmin(),
    joiSchemaValidation.validate(mediaSchema.mediaIdPathParamSchema, constants.requestObj.PATH_PARAMS),
    joiSchemaValidation.validate(mediaSchema.updateMediaBodySchema, constants.requestObj.BODY),
    mediaController.updateMedia
);
router.delete('/:mediaId',
    joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    tokenValidation.validateToken(),
    tokenValidation.checkAdmin(),
    joiSchemaValidation.validate(mediaSchema.mediaIdPathParamSchema, constants.requestObj.PATH_PARAMS),
    mediaController.deleteMedia
);
module.exports = router;

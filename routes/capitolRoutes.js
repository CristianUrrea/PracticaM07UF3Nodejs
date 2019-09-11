const express = require('express');
const router = express.Router();
const capitolController = require('../controller/capitolController');
const joiSchemaValidation = require('../helper/joiSchemaValidation');
const capitolSchema = require('../models/api/capitolSchema');
const constants = require('../config/constants');
const userSchema = require('../models/api/userSchema');
const tokenValidation = require('../models/api/tokenValidation');


router.post('/',
    joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    tokenValidation.validateToken(),
    tokenValidation.checkAdmin(),
    joiSchemaValidation.validate(capitolSchema.createCapitolSchema, constants.requestObj.BODY),
    capitolController.createCapitol
);
router.get('/details/:capitolId',
    joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    tokenValidation.validateToken(),
    tokenValidation.checkAdmin(),
    joiSchemaValidation.validate(capitolSchema.getCapitolDetailsSchema,
    constants.requestObj.PATH_PARAMS),
    capitolController.getCapitolDetails
);
router.get('/list',
    joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    tokenValidation.validateToken(),
    tokenValidation.checkAdmin(),
    joiSchemaValidation.validate(capitolSchema.getCapitolListSchema, constants.requestObj.QUERY_PARAMS),
    capitolController.getCapitolList
);
router.put('/:capitolId',
    joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    tokenValidation.validateToken(),
    tokenValidation.checkAdmin(),
    joiSchemaValidation.validate(capitolSchema.capitolIdPathParamSchema, constants.requestObj.PATH_PARAMS),
    joiSchemaValidation.validate(capitolSchema.updateCapitolBodySchema, constants.requestObj.BODY),
    capitolController.updateCapitol
);
router.delete('/:capitolId',
    joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    tokenValidation.validateToken(),
    tokenValidation.checkAdmin(),
    joiSchemaValidation.validate(capitolSchema.capitolIdPathParamSchema, constants.requestObj.PATH_PARAMS),
    capitolController.deleteCapitol
);
module.exports = router;

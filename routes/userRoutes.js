const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const joiSchemaValidation = require('../helper/joiSchemaValidation');
const userSchema = require('../models/api/userSchema');
const constants = require('../config/constants');
const tokenValidation = require('../models/api/tokenValidation');

//router.post('/', userController.createUser);


router.post('/',
    // joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    // tokenValidation.validateToken(),
    // tokenValidation.checkAdmin(),
    joiSchemaValidation.validate(userSchema.createUserSchema, constants.requestObj.BODY),
    userController.createUser
);

router.get('/list',
    joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    tokenValidation.validateToken(),
    tokenValidation.checkAdmin(),
    joiSchemaValidation.validate(userSchema.getUserListSchema, constants.requestObj.QUERY_PARAMS),
    userController.getUserList
);
router.get('/details/:userId',
    joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    tokenValidation.validateToken(),
    tokenValidation.checkUserAdmin(),
    joiSchemaValidation.validate(userSchema.userIdPathParamSchema, constants.requestObj.PATH_PARAMS),
    userController.getUserDetails
);

router.put('/:userId',
    joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    tokenValidation.validateToken(),
    tokenValidation.checkUserAdmin(),
    joiSchemaValidation.validate(userSchema.userIdPathParamSchema, constants.requestObj.PATH_PARAMS),
    joiSchemaValidation.validate(userSchema.updateUserBodySchema, constants.requestObj.BODY),
    userController.updateUser
);
router.delete('/:userId',
    joiSchemaValidation.validateAuthHeader(userSchema.tokenHeaderSchema),
    tokenValidation.validateToken(),
    tokenValidation.checkUserAdmin(),
    joiSchemaValidation.validate(userSchema.userIdPathParamSchema, constants.requestObj.PATH_PARAMS),
    userController.deleteUser
);

router.post('/authenticate',
    joiSchemaValidation.validate(userSchema.authenticateUserSchema, constants.requestObj.BODY),
    userController.authenticateUser
);
module.exports = router;

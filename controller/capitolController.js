const constants = require('../config/constants');
const capitolService = require('../services/capitolService');

module.exports.createCapitol = async (req, res, next) => {
    const responseObj = constants.responseObj;
    try {
        // const data = req.body;
        // const data = {
        //   capitolId: req.params.capitolId,
        //   titol: true,
        //   numero: true,
        //   temporada: true,
        //   serieId: true
        // }
        const data = req.body;

        // console.log("req.body: ", req.body);
        // call the service with this data
        /*let responseFromService = {
            status: constants.serviceStatus.MEDIA_CREATED_SUCCESSFULLY,
            message: 'okay',
            body: 'body'
        };*/
        const responseFromService = await capitolService.createCapitol(data);
        if (responseFromService.status === constants.serviceStatus.CAPITOL_CREATED_SUCCESSFULLY) {
            responseObj.status = 200;
            responseObj.message = constants.serviceStatus.CAPITOL_CREATED_SUCCESSFULLY;
            responseObj.body = responseFromService.body;
        }
    } catch(err) {
        console.log('ERROR-Controller-createCapitol: ', err);
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.getCapitolDetails = async (req, res, next) => {
    const responseObj = constants.responseObj;
    try {
        const data = {
            capitolId: req.params.capitolId,
        }
        /*const responseFromService = {
            status: constants.serviceStatus.USER_FETCHED_SUCCESSFULLY
        };*/
        const responseFromService = await capitolService.getCapitolDetails(data);
        if (responseFromService.status === constants.serviceStatus.CAPITOL_FETCHED_SUCCESSFULLY) {
            responseObj.status = 200;
            responseObj.message = constants.serviceStatus.CAPITOL_FETCHED_SUCCESSFULLY;
            responseObj.body = responseFromService.body;
        }
    } catch(err) {
        console.log('ERROR-Controller-getCapitolDetails: ', err);
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.getCapitolList = async (req, res, next) => {
    const responseObj = constants.responseObj;
    try {
        const data = {
            skip: req.query.skip,
            limit: req.query.limit
        };
        /*const responseFromService = {
            status: constants.serviceStatus.USER_LIST_FETCHED_SUCCESSFULLY
        };*/
        const responseFromService = await capitolService.getCapitolList(data);
        if (responseFromService.status === constants.serviceStatus.CAPITOL_LIST_FETCHED_SUCCESSFULLY) {
            responseObj.status = 200;
            responseObj.message = constants.serviceStatus.CAPITOL_LIST_FETCHED_SUCCESSFULLY;
            responseObj.body = responseFromService.body;
        }
    } catch(err) {
        console.log('ERROR-Controller-getCapitolList: ', err)
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.updateCapitol =  async (req, res, next) => {
    const responseObj = constants.responseObj;
    try {
        const data = req.body;
        data.capitolId = req.params.capitolId;
        // call the service with this data
        /*const responseFromService = {
            status: constants.serviceStatus.USER_UPDATED_SUCCESSFULLY,
            message: 'okay',
            body: 'body'
        };*/
        console.log("capitol update:",data)
        const responseFromService = await capitolService.updateCapitol(data);
        if (responseFromService.status === constants.serviceStatus.CAPITOL_UPDATED_SUCCESSFULLY) {
            responseObj.status = 200;
            responseObj.message = constants.serviceStatus.CAPITOL_UPDATED_SUCCESSFULLY;
            responseObj.body = responseFromService.body;
        }
    } catch(err) {
        console.log('ERROR-Controller-updateCapitol: ', err);
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.deleteCapitol =  async (req, res, next) => {
    const responseObj = constants.responseObj;
    try {
        const data = {
            capitolId: req.params.capitolId
        };
        // call the service with this data
        /*const responseFromService = {
            status: constants.serviceStatus.USER_DELETED_SUCCESSFULLY,
            message: 'okay',
            body: 'body'
        };*/
        const responseFromService = await capitolService.deleteCapitol(data);
        if (responseFromService.status === constants.serviceStatus.CAPTIOL_DELETED_SUCCESSFULLY) {
            responseObj.status = 204;
            responseObj.message = constants.serviceStatus.CAPITOL_DELETED_SUCCESSFULLY;
            responseObj.body = responseFromService.body;
        }
    } catch(err) {
        console.log('ERROR-Controller-deleteCapitol: ', err);
    }
    return res.status(responseObj.status).send(responseObj);
}

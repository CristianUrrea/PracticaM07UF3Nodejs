const jwt = require('jsonwebtoken')
const constants = require('../../config/constants')

module.exports.validateToken = () => {
    return (req, res, next) => {
        const responseObj = constants.responseObj;
        const bearerHeader = req.headers.authorization;
        if (bearerHeader.split(' ')[1] && bearerHeader.split(' ')[0] === 'Bearer') {
            const token = bearerHeader.split(' ')[1];
            if(token) {
                jwt.verify(token, process.env.SECRET_KEY, (err, authData)=> {
                    if(err) {
                        responseObj.message = constants.controllerStatus.INVALID_TOKEN;
                        responseObj.status = 400;
                        responseObj.body = {};
                        return res.status(responseObj.status).send(responseObj);
                    } else {
                        // console.log("datos:",authData);
                        req.myToken = token;
                        next();
                    }
                });

            } else {
                responseObj.message = constants.controllerStatus.TOKEN_MISSING;
                responseObj.status = 400;
                return res.status(responseObj.status).send(responseObj);
            }
        } else {
            responseObj.message = constants.controllerStatus.BEARER_TOKEN_MISSING;
            responseObj.status = 400;
            return res.status(responseObj.status).send(responseObj);
        }
    }
}

module.exports.checkAdmin = () => {
  return (req, res, next) => {
      const responseObj = constants.responseObj;
      const decoded = jwt.decode(req.myToken, {complete:true});
      // console.log(decoded.payload.userType)
      if(decoded.payload.userType == 'admin'){
        next();
      } else {
        responseObj.status = 403;
        responseObj.message = constants.serviceStatus.ADMIN_AUTHENTICATED_INVALID;
        return res.send(responseObj);
      }
  }
};

module.exports.checkUser = () => {
  return (req, res, next) => {
      const responseObj = constants.responseObj;
      const decoded = jwt.decode(req.myToken, {complete:true});
      // console.log(decoded.payload.userId);
      // console.log(decoded.payload.userType);

      if(decoded.payload.userType == 'normal'){
        next();
      }
  }
};

module.exports.checkUserAdmin = () => {
  return (req, res, next) => {
      const responseObj = constants.responseObj;
      const decoded = jwt.decode(req.myToken, {complete:true});
      // console.log(decoded.payload.userId);
      // console.log(decoded.payload.userType);
      next();
  }
};

// Definim unes quantes constants que ens serviran com a missatges d'error o succes.
module.exports = {
    responseObj: {
        status: 500,
        message: 'Internal server error',
        body: {}
    },
    databaseStatus: {
        ENTITY_FETCHED: 'Entity Fetched',
        ENTITY_CREATED: 'Entity Created',
        ENTITY_UPDATED: 'Entity Updated',
        ENTITY_DELETED: 'Entity Deleted',
        DATABASE_CONNECTED: 'Database connected successfully',
        DATABASE_ERROR: 'Database error'
    },
    controllerStatus: {
        BAD_REQUEST: 'Required fields missing',
        TOKEN_MISSING: 'Token missing from header',
        INVALID_TOKEN: 'Invalid token',
        BEARER_TOKEN_MISSING: 'Bearer token missing from header'
    },
    serviceStatus: {
        USER_FETCHED_SUCCESSFULLY: 'User fetched successfully',
        USER_CREATED_SUCCESSFULLY: 'User created successfully',
        USER_LIST_FETCHED_SUCCESSFULLY: 'User list fetched successfully',
        USER_UPDATED_SUCCESSFULLY: 'User updated successfully',
        USER_DELETED_SUCCESSFULLY: 'User deleted successfully',
        USER_AUTHENTICATED_SUCCESSFULLY: 'User authenticated successfully',
        MEDIA_FETCHED_SUCCESSFULLY: 'Media fetched successfully',
        MEDIA_CREATED_SUCCESSFULLY: 'Media created successfully',
        MEDIA_LIST_FETCHED_SUCCESSFULLY: 'Media list fetched successfully',
        MEDIA_UPDATED_SUCCESSFULLY: 'Media updated successfully',
        MEDIA_DELETED_SUCCESSFULLY: 'Media deleted successfully',
        CAPITOL_FETCHED_SUCCESSFULLY: 'Capitol fetched successfully',
        CAPITOL_CREATED_SUCCESSFULLY: 'Capitol created successfully',
        CAPITOL_LIST_FETCHED_SUCCESSFULLY: 'Capitol list fetched successfully',
        CAPITOL_UPDATED_SUCCESSFULLY: 'Capitol updated successfully',
        CAPITOL_DELETED_SUCCESSFULLY: 'Capitol deleted successfully',
        INVALID_CREDENTIALS_USER: 'eres usuario normal',
        INVALID_CREDENTIALS: 'name or password is incorrect',
        ADMIN_AUTHENTICATED_INVALID: '¡Without authorization!'

    },
    requestObj : {
      BODY: 'body',
      QUERY_PARAMS: 'query',
      PATH_PARAMS: 'path'
    }
}
